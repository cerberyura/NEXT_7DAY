import Link from "next/link";

const Home = () => {
  return(
      <div>
        Main Page

        <div>
            <Link href="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </Link>
        </div>
      </div>
  )
}

export default Home