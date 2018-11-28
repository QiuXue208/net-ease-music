import React from 'react'
import './App.css'

class RecommendationList extends React.PureComponent{
    render(){
        return (
            <section className="recommendation">
                <h2>推荐歌单</h2>
                <ul className="recommendationList">
                  <li>
                     <img src="http://p1.music.126.net/UFumsHtsuJky7gluwcC6Lg==/109951163683687709.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                     <p>早知道做人这么累，当初就不下凡了</p>   
                  </li>
                  <li>
                     <img src="http://p1.music.126.net/Z8gA7rjUFzYObDZJlrnUow==/109951163687891504.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                     <p>「中文说唱」韵脚勾勒出写给父母的信</p>   
                  </li>
                  <li>
                     <img src="http://p1.music.126.net/pMRi2zv6Cp0SoEFzA2yL-Q==/19128203788989932.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                     <p>2018网络红歌</p>   
                  </li>
                  <li>
                     <img src="http://p1.music.126.net/UFumsHtsuJky7gluwcC6Lg==/109951163683687709.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                     <p>早知道做人这么累，当初就不下凡了</p>   
                  </li>
                  <li>
                     <img src="http://p1.music.126.net/Z8gA7rjUFzYObDZJlrnUow==/109951163687891504.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                     <p>「中文说唱」韵脚勾勒出写给父母的信</p>   
                  </li>
                  <li>
                     <img src="http://p1.music.126.net/pMRi2zv6Cp0SoEFzA2yL-Q==/19128203788989932.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                     <p>2018网络红歌</p>   
                  </li>
              </ul>
            </section>
        )
    }
}


export default RecommendationList