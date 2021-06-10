import PaginationButtons from "./PaginationButtons";

function SearchResults ({ results }) {
  return (
    <div className="w-full px-3 sm:pl-10 md:pl-32 lg:pl-40">
      <p className="text-gray-600 text-xs ext-md mb-5 mt-3">ABOUT {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.searchTime} seconds)</p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8 ">
          <div className="group">
            <a href={result.link} className="text-sm">{result.formattedUrl}</a>
            <a href={result.link} >
              <h2 className="truncate text-xl text-blue-800 font-sans hover:underline">{result.title}</h2>
            </a>
          </div>
          <p className="line-clamp-2 text-sm">{result.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;