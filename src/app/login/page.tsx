'use client'
import styles from './login.module.css'
import dynamic from 'next/dynamic'
import { MatchDay, Progress, Spacer, Error } from '@/src/design'
import { MobileForm } from '@/src/components/form-mobile'
import { useLoginSendOtp } from '@/src/firebase/use-login-send-otp'
import { clientAuth } from '@/src/firebase/firebase-client'
import { useLoginValidateOtp } from '@/src/firebase/use-login-validate-otp'
import pushToken, {
    useLoginPostToken,
} from '@/src/firebase/use-login-post-token'

const OtpForm = dynamic(() => import('@/src/components/form-otp'), {
    loading: () => <Progress />,
})

const Page = () => {
    const { sendOtp, confirmationResult, sendOtpLoading, sendOtpError } =
        useLoginSendOtp(clientAuth)
    const {
        validateOtp,
        userCredential,
        validateOtpLoading,
        validateOtpError,
    } = useLoginValidateOtp()
    const { postToken } = useLoginPostToken()

    const isMobileFormVisible = !confirmationResult?.verificationId
    const isOtpFormVisible = confirmationResult?.verificationId

    if (userCredential) {
        postToken(userCredential.user)
        return
    }

    return (
        <div className={styles.page}>
            <MatchDay />
            <Spacer value={24} />
            {sendOtpError && <Error message={sendOtpError.message} />}
            {validateOtpError && <Error message={validateOtpError.message} />}
            {!isOtpFormVisible && <div id="recaptcha-container" />}
            {isMobileFormVisible && (
                <MobileForm
                    buttonText={sendOtpLoading ? 'Sending ...' : 'Send Otp'}
                    onSubmit={(phoneNumber) => sendOtp(phoneNumber)}
                />
            )}
            {userCredential && <div>{userCredential.user.phoneNumber}</div>}
            {isOtpFormVisible && (
                <OtpForm
                    buttonText={
                        validateOtpLoading ? 'Validating ...' : 'Validate Otp'
                    }
                    onSubmit={(code) => validateOtp(confirmationResult, code)}
                />
            )}
        </div>
    )
}

export default Page
