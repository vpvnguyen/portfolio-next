import Link from 'next/link';

const Login = () => (
    <>
        <div>render login component</div>
        <Link href="/Dashboard">
            <a>render dashboard when user has logged in</a>
        </Link>
    </>
);

export default Login;