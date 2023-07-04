import axios from '../../axios'
import Youtube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import { API_KEY ,imgUrl} from '../../constants/constant'
import './Post.css'
function Post(pros) {
    const [posts, setPosts] = useState([])
    const [videoUrl, setVideoUrl] = useState('')
    useEffect(() => {
        axios.get(pros.url).then(response=>{
          setPosts(response.data.results)
        })
    }, [])

    const videoShow = (id)=>{
      axios.get(`tv/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        console.log(response.data)
        if(response.data.results.length !== 0){
          setVideoUrl(response.data.results[0])
        }
      })
    }

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
    
  return (
    <div className='row'>
      <h2>{pros.title}</h2>
      <div className='posters'>
        {posts.map((post)=>
          <img onClick={()=>videoShow(post.id)} className={pros.small ? 'small-poster' : 'poster'} src={`${imgUrl+post.backdrop_path}`} alt="movie" />
        )}
      </div>
      {
        videoUrl && <Youtube videoId={videoUrl.key} opts={opts}/>
      }
    </div>
  )
}

export default Post
