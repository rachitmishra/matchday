"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { signIn } from "@/src/libs/firebase/auth";
import { MatchDay, MDInput, MDButton } from '@/src/libs/design';


const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [timer, setTimer] = useState(30); // Customizable resend timer
  const router = useRouter();

  // Function to handle phone number entry (add appropriate validation)
  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  // Function to handle OTP entry (add appropriate validation)
  const handleOtpChange = (event: any) => {
    setOtp(event.target.value);
  };


  // Function to send OTP (implement security measures and rate limiting)
  const handleSendOtp = async () => {
    try {
      const confirmationResult: any = await signIn(phoneNumber);
      setVerificationId(confirmationResult.verificationId); // Store verification ID

      // Start timer for resend button
      setIsResendDisabled(true);
      setTimer(30);
      const intervalId = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          setIsResendDisabled(false);
          clearInterval(intervalId);
        }
      }, 1000); // Update timer every second

      setError(null); // Clear any previous errors
    } catch (error: any) {
      console.error("Error sending OTP:", error);
      setError(error.message); // Display error message to user
    }
  };

  // Function to verify OTP (handle invalid OTP errors)
  const handleVerifyOtp = async () => {

  };

  return (
    <div >
      <MatchDay />
      {error && <p className="error">{error}</p>}
      <MDInput type={'tel'} placeholder={"Phone Number"} value={phoneNumber} onChange={handlePhoneNumberChange} />
      <div>
      <MDButton onClick={() => handleSendOtp()} title="Send OTP" />
      </div>
      {verificationId && (
        <>
          <MDInput type={'number'} placeholder={"Enter OTP"} value={otp} onChange={handleOtpChange} />
          <MDButton onClick={() => handleSendOtp()} title="Verify OTP" />
          <MDButton disabled={isResendDisabled} onClick={() => handleSendOtp()}
            title={`Resend OTP (${timer})`}
          />
        </>
      )}
    </div>
  );
};

export default Page;
