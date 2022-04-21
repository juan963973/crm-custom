import { useRouter } from 'next/router';
import { Col, Row, Button } from "react-bootstrap";
import { FaFilter, FaList, FaColumns } from 'react-icons/fa';
import FilteringResolvers from "components/_common/filtering-resolvers";


export default function CallToActions({params}:any) {
    const {ModuleText, textList, textKanban, setViewFilter, setViewKanban, viewFilter, viewKanban, module} = params

    const toggleViewFilter = () => setViewFilter(!viewFilter)
    const toggleViewKanban = () => setViewKanban(!viewKanban)
 
    const styleFilter = viewFilter ? {background: '#FFF', boxShadow: 'inset 0 2px 10px 0px rgb(0 0 0 / 35%)' } : {background: '#FFF'}
    
    const router = useRouter();

    const goToCreate = () => {
        router.push(`${module}/new`)
    }

    return (
        <>
            <Col xs={1} style={{width: '65px'}} >
                <Button variant="secondary" style={styleFilter} onClick={toggleViewFilter}>
                    <div>
                        <FaFilter style={{color: '#000'}} />
                    </div>
                </Button>
            </Col>
            <Col xs={2} >
                <FilteringResolvers />
            </Col>
            {/* <Col xs={2} >
                <Button variant="secondary" style={{background: '#FFF', color: 'black'}} onClick={toggleViewKanban}>
                    <div>
                        {viewKanban ? 
                            <><FaList style={{color:"black"}} /> {textList}</>: 
                            <><FaColumns style={{color:"black"}} /> {textKanban}</>
                        }
                    </div>
                </Button>
            </Col> */}   
            <Col align='end'>
                <Button onClick={goToCreate}>Crear {ModuleText}</Button>
            </Col>
        </>
    )
}