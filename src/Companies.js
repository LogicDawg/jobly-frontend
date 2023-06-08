import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen"
import JoblyApi from "./api/api"
import Search from "./Search";
import CompanyCard from "./CompanyCard";

const Companies = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnMount() {
        console.debug("CompanyList useEffect getCompaniesOnMount");
        search();
      }, []);

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
        
      }

    if (!companies) return <LoadingScreen />;

    return (
        <div>
        <h1>Some Companies with some jobs</h1>
        <Search searchFor={search} />
        {companies.length
            ? (
                <div className="card mr-1">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
        </div>
    )
}

export default Companies;