"use client";

import React, { useRef, useState } from 'react';
import { signUpUser, uploadImage } from '../config/firebaseMethod';


const Register: React.FC = () => {
  const fullName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const profileImage = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const signUserFromFirebase = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (profileImage.current?.files && email.current?.value) {
        // Upload the profile image
        const userProfileImageUrl = await uploadImage(
          profileImage.current.files[0],
          email.current.value
        );

        // Register the user
        const userData = await signUpUser({
          fullName: fullName.current?.value || '',
          email: email.current.value,
          password: password.current?.value || '',
          profileImage: userProfileImageUrl,
        });

        console.log(userData);

        // Navigate to the login page after successful registration
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <form onSubmit={signUserFromFirebase}>
        <div className="relative h-90 w-96 border border-ghost m-3 p-4 bg-white shadow-lg rounded">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Username"
              ref={fullName}
            />
          </label>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="email"
              className="grow"
              placeholder="Email"
              ref={email}
            />
          </label>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              ref={password}
            />
          </label>
          <br />
          <label>
            <input
              type="file"
              className="file-input file-input-bordered flex items-center gap-2 w-full"
              ref={profileImage}
            />
            <button
              type="submit"
              className="btn bg-green-400 mt-3 w-full"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Register;
