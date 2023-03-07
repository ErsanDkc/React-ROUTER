import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"

function User() {
    const [user, setUser] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {
          navigate("/users")
      },7000)


        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setisLoading(false))
    }, [id,navigate])
  return (
    <div>
        

        <h2>you will be redirected to "USERS PAGE" in 7 seconds..</h2>
        
        {
          !isLoading &&  JSON.stringify(`Name: ${user.name  }    ////    UserName: ${user.username  } ////  E-mail: ${user.email  }   ////   Phone: ${user.phone} `)
            
        }
    </div>

  )
}

export default User