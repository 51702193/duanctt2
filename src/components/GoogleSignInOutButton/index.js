import { useGoogleAuth } from 'components/GoogleAuth';

const GoogleSignInOutButton = () => {

    const { signIn, signOut, isSignedIn } = useGoogleAuth();

    return (
        <div onClick={isSignedIn ? signOut : signIn} class="button button-gray-bordered button-winona">
            {isSignedIn ? "Đăng xuất" : "Đăng Nhập"}
        </div>
    );
};

export default GoogleSignInOutButton;