import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'

export default function NewButtonCase() {
    const router = useRouter()

    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        router.push('/cases/new/')
    }

    const Home = () => {
        const id = 1;
        
        function sendProps(){
            router.push({
                pathname: '/cases/new/',
                query: {
                    id
                }
            })
        }
    }

    return (
        <Button
            size="sm"
            variant="secondary"
            // onClick={handleClick}
            onClick={() => sendProps()}
        >
            Nuevo
        </Button>
    )
}