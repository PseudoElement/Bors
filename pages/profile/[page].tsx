import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BuyStock, MyStocks, UserAccount } from 'features'

const Profile: NextPage = () => {

    const router = useRouter()

    const { page } = router.query

    return (
        <>
            {page === 'buy-stocks' && <BuyStock />}
            {page === 'personal-account' && <UserAccount />}
            {page === 'my-stocks' && <MyStocks />}
        </>
    )
}

export default Profile
