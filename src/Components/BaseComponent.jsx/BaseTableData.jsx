

import {Table, Form, Input, Button} from "antd";
import {useState, useEffect} from "react"

export default function BaseTable(){


    const mainDiv = {
        width:"80%"
    }
    const [dataSource, setDataSource] = useState([])
    const [editRow, setEditRow] = useState(null);
    const [form] = Form.useForm()
    
    useEffect(() => {
        const data = [];
        for(let i=0; i<4; i++){
        data.push({
            key:`${i}`,
            Name:`Name ${i}`,
            Notice:`Notice ${i}`,
            Assignee:`Assignee ${i}`,
            Status:`Status ${i}`

        })};
        setDataSource(data);
        
    }, [])

    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render:(text, record)=>{
                if(editRow === record.key){
                    return <Form.Item
                    name="name"
                    rules={[{
                        required: true,
                        message: 'Please enter a Name',
                    }]}
                    
                    >
                    
                    <Input />
                    </Form.Item>
                }else{
                    return <p></p>
                }
            }

        },
        {
            title: 'Notice',
            dataIndex: 'notice',
            render:(text, record)=>{
                if(editRow === record.key){
                    return <Form.Item
                    name="notice"
                    
                    
                    >
                    
                    <Input />
                    </Form.Item>
                }else{
                    return <p></p>
                }
            }
            

        },
        {
            title: 'Assignee',
            dataIndex: 'assignee',
            render:(text, record)=>{
                if(editRow === record.key){
                    return <Form.Item
                    name="Name"
                    
                    
                    >
                    
                    <Input />
                    </Form.Item>
                }else{
                    return <p></p>
                }
            }

        },
        {
            title: 'Status',
            dataIndex: 'status',
            render:(text, record)=>{
                if(editRow === record.key){
                    return <Form.Item
                    name="status"

                    >
                    
                    <Input />
                    </Form.Item>
                }else{
                    return <p></p>
                }
            }

        }
        ,
        {
            title: 'Actions',
            render:(_, record) => {
                return <>
                
                <Button variant={'link'} onClick={() => {setEditRow(record.key)
                form.setFieldsValue({
                    Name:record.name,
                    Notice:record.notice,
                    Assignee:record.assignee,
                    Status:record.status,

                })
                }}>Edit</Button>
                <Button type='link' value="submit">Save</Button>
                </>
            }            

        }
    ]
    const onFinish = (values) => {

        const updatedDataSource = [...dataSource]
        updatedDataSource.splice(editRow, 1, {...values, key:editRow})
        setDataSource(updatedDataSource)
        setEditRow(null)

    };

    return <div style={mainDiv}>
        
        <Form form={form} onFinish={onFinish}>
        <Table
        columns={columns}
        dataSource={dataSource}
        ></Table>
        </Form>

    </div>
}

/* <Tr>
<Td><input /></Td>
<Td><input />inches</Td>
<Td><input /></Td>
<Td><select> <option></option> <option>Todo</option> <option>Completed</option> </select></Td>
<Td><Button>Save</Button><Button>Delete</Button></Td>
    </
*/
 

// <Tr>
//         <Td>inches</Td>
//         <Td>millimetres (mm)</Td>
//         <Td>25.4</Td>
//         <Td>25.4</Td>
//         <Td>25.4</Td>
//       </Tr>
//       <Tr>
//         <Td>feet</Td>
//         <Td>centimetres (cm)</Td>
//         <Td>centimetres (cm)</Td>
//         <Td>centimetres (cm)</Td>
//         <Td>centimetres (cm)</Td>
//       </Tr>
//       <Tr>
//         <Td>yards</Td>
//         <Td>metres (m)</Td>
//         <Td>metres (m)</Td>
//         <Td>metres (m)</Td>
//         <Td>metres (m)</Td>
//       </Tr>
      