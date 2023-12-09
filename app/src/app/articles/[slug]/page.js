
import Link from 'next/link'

async function GetData() {

    try{
        const res = await fetch('http://localhost:3000/api/phones')
        return await res.json()
    }catch(e){
        console.error("Error: ", e)
        return null
    }
  }

export default async function Page() {
    
    const staticData = await GetData()

    if(staticData == 401){
        return (
            <div>
                <p>Error: {JSON.stringify(staticData)}</p>
            </div>
        );
        }else{
            return (
                
                <div>
                    <ul>
                        {staticData.map((article) => (
                            <div>
                                <br></br>
                                <li>
                                    <p> 
                                        {"ID: " + article.id}
                                    </p>
                                    <p>
                                        {"Type: " + article.title}
                                    </p>
                                    <p>
                                        {"Description: " + article.content}
                                    </p>
                                    <Link href={"/articles/"+article.id}>More information...</Link>
                                </li>
                            </div>
                        ))}
                    </ul>
                    
                </div>
                
            )
        }
    }
