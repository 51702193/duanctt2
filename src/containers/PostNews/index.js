
import { Form, Input, Button, Select, Upload, message } from 'antd';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callDistricts, callProvinces, callStreets, callWards } from 'redux/actions/postNews'
import { getDistrictsPostNews, getProvincesPostNews, getStreetsPostNews, getWardsPostNews } from 'redux/selectors'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

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

const PostNews = ({ BE_API_DEFAULT_ROUTE }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(callProvinces())
    }, [])

    const districts = useSelector(getDistrictsPostNews);
    const provinces = useSelector(getProvincesPostNews);
    const streets = useSelector(getStreetsPostNews);
    const wards = useSelector(getWardsPostNews);

    const [curPorvince, setCurProvice] = useState(null);
    const [curDistrict, setCurDistrict] = useState(null);

    const handleSetProvince = provice => {
        setCurProvice(provice)
        dispatch(callDistricts(provice))
    }

    const handleSetDistrict = district => {
        setCurDistrict(district)
        dispatch(callStreets(district))
        dispatch(callWards(district))
    }

    const onFinish = (values) => {
        values.information1.images = values.information1.file.fileList.map(f => f.xhr.response).join(',');
        fetch(`${BE_API_DEFAULT_ROUTE}/tintuc`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values.information1)
        })
    };

    const draggerProps = {
        name: 'file',
        multiple: true,
        action: `${BE_API_DEFAULT_ROUTE}/file/upload`,
        beforeUpload: file => {
            const fileType = ['image/png', 'image/jpeg', "image/png"];
            if (['image/png', 'image/jpeg', "image/png"].includes(file.type)) {
                message.error(`please using PNG, jpg, jpeg file`);
            }
            return fileType.includes(file.type) ? true : Upload.LIST_IGNORE;
        },
        onChange(info) {
            const { status } = info.file;
            if (status === 'done') {
                info.file.fileName = info.file.xhr.response;
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <div className="dangtin__container">
                <div className="title">
                    Thông tin cơ bản
                </div>
                <div className="content">
                    <Form.Item name={['information1', 'tenduan']} label="Tên Dự Án" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'provinceCode']} label="Tỉnh" rules={[{ required: true }]}>
                        <Select placeholder="Chọn Tỉnh" onChange={handleSetProvince}>
                            {provinces.map(province => <Option key={province.code} value={province.code}>{province.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information1', 'districtId']} label="Quận" rules={[{ required: true }]}>
                        <Select placeholder="Chọn Quận" onChange={handleSetDistrict} disabled={curPorvince === null}>
                            {districts.map(district => <Option key={district.id} value={district.id}>{district.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information1', 'streetsId']} label="Đường - Phố" rules={[{ required: true }]}>
                        <Select placeholder="Chọn Đường - Phố" disabled={curDistrict === null}>
                            {streets.map(streets => <Option key={streets.id} value={streets.id}>{streets.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information1', 'wardId']} label="Phường - Xã" rules={[{ required: true }]}>
                        <Select placeholder="Chọn Phường - Xã" disabled={curDistrict === null}>
                            {wards.map(ward => <Option key={ward.id} value={ward.id}>{ward.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information1', 'chudautu']} label="Chủ đầu tư" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'donviphattrien']} label="Đơn vị phát triển dự án" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'loaihinhsanpham']} label="Loại hình sản phẩm" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'tongdientich']} label="Tổng diện tích" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'matdodato']} label="Mật độ đất ở chiếm" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'tienichcongcong']} label="Tiện ích công cộng" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'baogom']} label="Bao gồm" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'dientich']} label="Diện tích" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'giaban']} label="Giá bán" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'mota']} label="Mô tả" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['information1', 'file']} label="Hình Ảnh">
                        <Upload.Dragger {...draggerProps}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>

                </div>
                {/* <div className="content">
                    <Form.Item name={['information1', 'tieu-de']} label="Tiêu Đề" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['information1', 'hinh-thuc']} label="Hình Thức" rules={[{ required: true }]}>
                        <Select>
                            <Option value="dummy1">dummy1</Option>
                            <Option value="dummy2">dummy2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information1', 'loai']} label="Loại" rules={[{ required: true }]}>
                        <Select>
                            <Option value="dummy1">dummy1</Option>
                            <Option value="dummy2">dummy2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information1', 'tinh-tp']} label="Tỉnh/Thành Phố" rules={[{ required: true }]}>
                        <Select>
                            <Option value="dummy1">dummy1</Option>
                            <Option value="dummy2">dummy2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={['information1', 'quan-huyen']} label="Quận/Huyện" rules={[{ required: true }]}>
                        <Select>
                            <Option value="dummy1">dummy1</Option>
                            <Option value="dummy2">dummy2</Option>
                        </Select>
                    </Form.Item>
                </div> */}
            </div>

            {/* <div className="dangtin__container">
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
            </div> */}

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PostNews;