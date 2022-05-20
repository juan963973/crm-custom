import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'

interface Props {
    dataIdCase: any
}

export default function NewButtonCase({ dataIdCase } : Props) {
    const router = useRouter()

    const id = dataIdCase.id
    console.log('dataIdCase', dataIdCase)
    console.log(JSON.stringify(dataIdCase))

    function sendProps(){
        router.push({
            pathname: `/cases/new`,
            query: {
                data: JSON.stringify(dataIdCase)
            },
        }, '/cases/new')
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