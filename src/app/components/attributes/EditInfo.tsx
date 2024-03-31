import { editInfo, getInfo } from '@/app/actions/actions';
import React, { useState, useEffect } from 'react';

type UserInfo = {
  __typename: string;
  id: string;
  email: string;
  name?: string | null | undefined;
  weight?: number | null | undefined;
  height?: number | null | undefined;
  gender?: string | null | undefined;
  goals?: string | null | undefined;
  updatedAt: string;
};

const EditInfo = () => {
  const [userInfo, setUserInfo] = useState<null | UserInfo>(null);
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [goals, setGoals] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [infoLoading, setInfoLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getInfo();
        if (userData) {
          setUserInfo(userData);
          setAge(userData.age?.toString() ?? '');
          setGender(userData.gender ?? '');
          setHeight(userData.height?.toString() ?? '');
          setWeight(userData.weight?.toString() ?? '');
          setGoals(userData.goals ?? '');
          setInfoLoading(false);
        } else {
          console.log("User data is null or undefined.");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); 
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      await editInfo(formData);
      setSuccess("User info updated successfully");
    } catch (error) {
        setError("Error updating user info");
      console.error("Error updating user info:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="w-full">
      <div className="sm:w-[400px] w-[200px] my-6 bg-slate-400 p-8 rounded-md">
        <h2 className="text-[18px] pb-4"> Edit your attributes</h2>
        <hr></hr>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-1 pt-4">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="text-black p-1"
            id="age"
            name="age"
            placeholder={infoLoading ? 'Loading...' : ''}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div>
            <label htmlFor="male">
              <input
                type="radio"
                id="male"
                name="gender"
                value="MALE"
                checked={gender === "MALE"}
                onChange={() => setGender("MALE")}
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                value="FEMALE"
                checked={gender === "FEMALE"}
                onChange={() => setGender("FEMALE")}
              />
              Female
            </label>
          </div>
          <label htmlFor="height">Height (in)</label>
          <input
            type="text"
            className="text-black p-1"
            id="height"
            name="height"
            placeholder={infoLoading ? 'Loading...' : ''}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label htmlFor="weight">Weight (lbs)</label>
          <input
            type="text"
            className="text-black p-1"
            id="weight"
            name="weight"
            placeholder={infoLoading ? 'Loading...' : ''}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="goals">Goals</label>
          <textarea
            name="goals"
            id="goals"
            className="text-black p-1"
            placeholder={infoLoading ? 'Loading...' : ''}
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
          />
          <button 
            className={`bg-blue-500 text-white rounded-md p-2 mt-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={isLoading || infoLoading}
          >
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>
    </div>
  );
};

export default EditInfo;
