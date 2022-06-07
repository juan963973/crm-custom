import { useRouter } from 'next/router';
import { Col, Row, Button } from "react-bootstrap";
import { FaFilter, FaList, FaColumns } from 'react-icons/fa';
import FilteringResolvers from "components/_common/filtering-resolvers";
import { CanActive } from 'auth/CanActive';
import { permissionFront } from 'auth/permissions';

export default function CallToActions({params}:any) {
    const {ModuleText, textList, textKanban, setViewFilter, setViewKanban, viewFilter, viewKanban, module} = params

    const toggleViewFilter = () => setViewFilter(!viewFilter)
    const toggleViewKanban = () => setViewKanban(!viewKanban)
 
    const styleFilter = viewFilter ? {background: '#FFF', boxShadow: 'inset 0 2px 10px 0px rgb(0 0 0 / 35%)' } : {background: '#FFF'}
    
    const router = useRouter();

    const goToCreate = () => router.push(`${module}/new`)

    const exportCase = () => {
        window.open("http://192.168.121.16:3000/cases/export");
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
            <Col xs={3} >
                <FilteringResolvers />
            </Col>
            {/* <Col align='end'>
                
            </Col>  */}
            
            <Col align='end'>
                <Button variant="secondary" style={{background: '#FFF', color: 'black', marginRight: '24px' }} onClick={toggleViewKanban}>
                    <div>
                        {viewKanban ? 
                            <><FaList style={{color:"black"}} /> {textList}</>: 
                            <><FaColumns style={{color:"black"}} /> {textKanban}</>
                        }
                    </div>
                </Button>
                {CanActive(permissionFront.CAN_CHANGE_STATUS_CASES) && (
                    <Button onClick={exportCase} variant="secondary" style={{background: '#FFF', color: 'black', marginRight: '24px' }}>Tablero {ModuleText}</Button>
                )}
                {CanActive(permissionFront.CAN_CHANGE_STATUS_CASES) && (
                    <Button onClick={goToCreate}>Crear {ModuleText}</Button>
                )}
            </Col>
        </>
    )
}