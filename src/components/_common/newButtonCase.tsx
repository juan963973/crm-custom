import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'

interface Props {
    dataId: any
}

export default function NewButtonCase({ dataId } : Props) {
    const router = useRouter()

    const id = 1

    function sendProps(){
        router.push({
            pathname: '/cases/new/',
            query: {
                dataId
            }
        })
    }

    return (
        <Button
            size="sm"
            variant="secondary"
            onClick={() => sendProps()}
        >
            Nuevo
        </Button>
    )
}