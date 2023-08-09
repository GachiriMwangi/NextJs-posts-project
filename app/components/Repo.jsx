import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'
import React from 'react'
async function fetchRepo(name){
    const response = await fetch(`https://api.github.com/repos/gachirimwangi/${name}`, {
        next: {
          revalidate: 60
        }
      })
    const repos = await response.json()
    return repos
}
const Repo = async({name}) => {
    const repo = await fetchRepo(name)
   
  return (
    <>

    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <div class="card-stat">
        <FaStar /><span>
            {repo.stargazers_count}
        </span>
    </div>

    <div class="card-stat">
        <FaCodeBranch />
        <span>
            {repo.forks_count} 
        </span>
       
    </div>

    <div class="card-stat">
        <FaEye />
        <span>
          {repo.watchers_count}   
        </span>
       
    </div>
    </>
  )
}
export default Repo
