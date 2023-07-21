import React from 'react'
import CategoryList from '../../components/category-directory/category-directory.component'

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
    {
      id: 6,
      title: 'Kids',
      imageUrl: 'https://pixabay.com/get/g476a97bdd93af49a5a4a2ff2f729a06fee0a14d06d4bfe5323069efa4b25f5b50ef228858b17ee1a8a5557976b15921bb009eec3a15af5438500268424f1d4ad003d5bf4fc89df346a50518a4fd3bdb9_640.jpg'
    },
    {
      id: 7,
      title: 'Seniors',
      imageUrl: 'https://pixabay.com/get/gf3802129744bc5794fe96b5b1c447753b851f71a87c8b0c953de4395e5531a85537ba539e464de9305001b476beca6d30d7a8e19eb6dae6c363d13c6a9d8fd5685ab5ab3fb34957a91a4fcbe538dae64_640.jpg'
    }
  ]
  return (
    <div className="app-container">
        <CategoryList categories={categories}/>
    </div>
  )
}

export default Home
