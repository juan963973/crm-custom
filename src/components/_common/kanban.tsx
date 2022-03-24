import React, { useEffect, useState } from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { kanbanView } from "services/caseService"
import styles from '../../../public/styles/Kanban.module.scss'

import { typesFilter } from "store/filter/filterReducer";
import { useStoreFilter, useDispatchFilter } from "store/filter/FilterProvider";

const Kanban = ({page}:any) => {
    const storeFilter = useStoreFilter();
    const [cols, setCols] = useState<object>({})

    useEffect(() => {
        kanbanView(page, storeFilter.type, null)
            .then( (data:any) => {
                setCols(data)
            })
            .catch((e:any) => console.log(e));
    }, [storeFilter])

    const onDragEnd = (result:any, cols:any, setCols:any) => {
        if (!result.destination) return
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceCol = cols[source.droppableId]
            const destCol = cols[destination.droppableId]
            const sourceItems = [...sourceCol.items]
            const destItems = [...destCol.items]
            const [removed] = sourceItems.splice(source.index, 1)
            destItems.splice(destination.index, 0, removed)
            setCols({
                ...cols,
                [source.droppableId]: {
                    ...sourceCol,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destCol,
                    items: destItems
                }
            })
        } else {
            const columns = cols[source.droppableId]
            const _items = [...columns.items]
            const [removed] = _items.splice(source.index, 1)
            _items.splice(destination.index, 0, removed)
            setCols({
                ...cols,
                [source.droppableId]: {
                    ...columns,
                    items: _items
                }
            })
        }
    }

    return (
        <div className={styles.container}>
            <DragDropContext onDragEnd={(result) => {
                onDragEnd(result, cols, setCols)
            }}>
                {Object.entries(cols).map(([id, col], index) => (
                    <div className={styles.containerDroppable} key={index}>
                        <div className={styles.titleContainer} 
                            style={{
                                background: "#dff7e4",
                                borderColor: "#c7e8ce",
                                borderTop: "4px solid #93cb9d" 
                            }}>
                            <div className={styles.title}>
                                {col?.name}
                            </div>
                            <div className={styles.subtitle}>
                                {col.items.length} Casos
                            </div>
                        </div>
                        <div style={{ marginLeft: "8px" }}>
                            <Droppable droppableId={id} key={id}>
                                {(provider, snapshot) => (
                                    <div {...provider.droppableProps}
                                        className={styles.droppable}
                                        style={{
                                            backgroundColor: snapshot.isDraggingOver ? "#EDE685" : "#EBEBEB",                                            
                                        }}
                                        ref={provider.innerRef}>
                                        {col.items.map((item:any, index:any) => (
                                            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                                {(provider, snapshot) => (
                                                    <div ref={provider.innerRef}
                                                        {...provider.dragHandleProps}
                                                        {...provider.draggableProps}
                                                        className={styles.draggable}
                                                        style={{ backgroundColor: "#fff",  ...provider.draggableProps.style}}
                                                        // style={{
                                                        //     backgroundColor: snapshot.isDragging ? "#FFF" : "#EBEBEB",
                                                        //     ...provider.draggableProps.style
                                                        // }}
                                                    >
                                                        {/* RECLAMO CDA<br />
                                                        33109<br />
                                                        Solicitud<br />
                                                        Tarjeta de Crédito<br />
                                                        Tarjetas */}
                                                        {item.issue}<br />
                                                        {item.ticketNumber}<br />
                                                        {item.type}<br />
                                                        {item.subtype}<br />
                                                        {item.resolutionAreas.join(',')}<br />
                                                        {item.resolver.join(',')}
                                                        
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provider.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </div>
                ))}
            </DragDropContext>
        </div>
    );
}
  
export default Kanban