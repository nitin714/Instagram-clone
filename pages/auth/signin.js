import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "./../../components/Header";

//Browser...
const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-44 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
          This is not a REAL app, it is built for educational purposes only
        </p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div
              className="w-44 py-2 px-3 flex space-x-1 justify-between items-center border shadow-xs hover:shadow-lg bg-white rounded-[3px]"
              key={provider.name}
            >
              <img className="h-4 w-4" src="/Google__G__Logo.svg" alt="" />
              <button
                className="font-semibold text-gray-500 text-sm"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//Server side render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
