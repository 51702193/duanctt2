import { useDispatch } from 'react-redux'
import { useGoogleAuth } from 'components/GoogleAuth';
import { userLogin, userLogout } from 'redux/actions/app'

const GoogleSignInOutButton = () => {
    const dispatch = useDispatch()
    const googleAuth = useGoogleAuth()
    const { signIn, signOut, isSignedIn } = googleAuth;

    const onClick = async () => {
        if (!isSignedIn) {
            await signIn().then(googleUser => dispatch(userLogin(googleUser)));
        } else {
            await signOut().then(googleUser => dispatch(userLogout(googleUser)));
        }
    }
    return (
        <div onClick={onClick} className="button button-gray-bordered button-winona">
            {isSignedIn ? "Đăng xuất" : "Đăng Nhập"}
        </div>
    );
};

export default GoogleSignInOutButton;