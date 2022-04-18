import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'

export default function NewButtonCase() {
    const router = useRouter()

    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        router.push('/cases/new/')
    }

    return (
        <Button
            size="sm"
            variant="secondary"
            onClick={handleClick}
        >
            Nuevo
        </Button>
    )
}