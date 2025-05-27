import CardNewRelease from "../Card/CardNewRelease"
import CardSlideshow from "../Card/CardSlideshow"
import CardTopRating from "../Card/CardTopRating"
import CardTrending from "../Card/CardTrending"
import CardWatch from "../Card/CardWatch"

const Content = () =>{
    return(
        <>
        <content>
            <CardSlideshow />
            <CardWatch />
            <CardTopRating />
            <CardTrending />
            <CardNewRelease />
        </content>
        </>

    )
}

export default Content