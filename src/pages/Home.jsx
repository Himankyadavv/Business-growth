import { HomeMiddle } from "../components/HomeMiddle"
import { HomeUpper } from "../components/HomeUpper"
import { Navbar } from "../components/Navbar"
import { HomeLower } from "../components/HomeLower"
import { CustomerReview } from "../components/CustomerReview"
import { Footer } from "../components/Footer"
export function Home(){
    return (
        <div>
            <Navbar />
            <HomeUpper />
            <HomeMiddle />
            <HomeLower />
            <CustomerReview />
            <Footer />
        </div>
    )
}