import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

export default async function Home({searchParams}:{searchParams:Promise<{query?: string}>}) {
 
  const query = (await searchParams).query
  return(
    <>
      <Navbar/>
      <main className="p-8">
        <h1>Welcome To Home Page</h1>
        <SearchForm query={query}/>
      </main>
    </>
  )

}