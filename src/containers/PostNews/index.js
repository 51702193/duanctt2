
import { Form, Input, InputNumber, Button, Select } from 'antd';
import './styles.scss'

const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const PostNews = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <div className="dangtin__container">
                <div className="title">
                    Thông tin cơ bản
                </div>
                <div className="content">
                    <Form.Item name={['information-1', 'tieu-de']} label="Tiêu Đề" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information-1', 'hinh-thuc']} label="Hình Thức" rules={[{ required: true }]}>
                        <Select>
                            <Option value="dummy1">dummy1</Option>
                            <Option value="dummy2">dummy2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information-1', 'loai']} label="Loại" rules={[{ required: true }]}>
                        <Select>
                            <Option value="dummy1">dummy1</Option>
                            <Option value="dummy2">dummy2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information-1', 'tinh-tp']} label="Tỉnh/Thành Phố" rules={[{ required: true }]}>
                        <Select>
                            <Option value="dummy1">dummy1</Option>
                            <Option value="dummy2">dummy2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information-1', 'quan-huyen']} label="Quận/Huyện" rules={[{ required: true }]}>
                        <Select>
                            <Option value="dummy1">dummy1</Option>
                            <Option value="dummy2">dummy2</Option>
                        </Select>
                    </Form.Item>
                </div>
            </div>

            <div className="dangtin__container">
                <div className="title">
                    Thông tin dự án
                </div>
                <div className="content">
                    <Form.Item name={['information-2', 'ten-du-an']} label="Tên Dự Án" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information-2', 'dien-tich']} label="Diện Tích" rules={[{ type: 'number', min: 0 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['information-2', 'don-vi']} label="Đơn vị" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information-2', 'gia']} label="Giá (VND)" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['information-2', 'dia-chi-chi-tiet']} label="Địa Chỉ Chi Tiết" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['information-2', 'thong-tin-mo-ta']} label="Thông Tin Mô Tả" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                </div>
            </div>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PostNews;