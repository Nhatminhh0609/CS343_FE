<template>
    <div class="row mb-3">
        <div class="col-12 text-end">
            <button class="btn btn-outline-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#themMoiModal">
                <b>Thêm Mới</b>
            </button>
        </div>
    </div>
    <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Nhà Cung Cấp</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="row">
                            <div class="col-4">
                                <label class="form-label">Mã Số Thuế</label>
                                <input type="text" class="form-control"
                                    placeholder="Nhập Mã Số Thuế">
                            </div>
                            <div class="col-4">
                                <label class="form-label">Tên Công Ty</label>
                                <input type="text" class="form-control"
                                    placeholder="Nhập Tên Công Ty">
                            </div>
                            <div class="col-4">
                                <label class="form-label">Tên Người Đại Diện</label>
                                <input type="text" class="form-control"
                                    placeholder="Nhập Tên Người Đại Diện">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label class="form-label mt-3">Số Điện Thoại</label>
                                <input type="text" class="form-control"
                                    placeholder="Nhập Số Điện Thoại">
                            </div>
                            <div class="col-4">
                                <label class="form-label mt-3">Email</label>
                                <input type="email" class="form-control"
                                    placeholder="Nhập Email">
                            </div>
                            <div class="col-4">
                                <label class="form-label mt-3">Địa Chỉ</label>
                                <input type="text" class="form-control"
                                    placeholder="Nhập Địa Chỉ">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label mt-3">Tên Gợi Nhớ</label>
                                <input type="text" class="form-control"
                                    placeholder="Nhập Tên Gợi Nhớ">
                            </div>
                            <div class="col-6">
                                <label class="form-label mt-3">Tình Trạng</label>
                                <select class="form-control">
                                    <option value="0">Tạm Dừng</option>
                                    <option value="1">Hoạt Động</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button type="button" class="btn btn-primary" 
                        data-bs-dismiss="modal">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card border-top border-0 border-4 border-primary">
            <div class="card-header">
                <h5>Danh Sách Nhà Cung Cấp</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input type="text"
                                            class="form-control" placeholder="Nhập thông tin cần tìm">
                                        <button class="btn btn-primary">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center align-middle text-nowrap">
                                    #
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Mã Số Thuế
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Tên Công Ty
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Người Đại Diện
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Số Điện Thoại
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Email
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Địa Chỉ
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Tên Giợi Nhớ
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Tình Trạng
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="text-center align-middle text-nowrap">
                                    
                                </th>
                                <td class="text-center align-middle text-nowrap">
                                    
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#diaChiModal">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </button>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button class="btn btn-success">Hoạt Động</button>
                                    <button class="btn btn-warning">Tạm Dừng</button>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button  class="btn btn-info" style="width: 100px; margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatModal">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                        data-bs-target="#xoaModal"
                                        >Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Nhà Cung Cấp</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="row">
                                        <div class="col-4">
                                            <label class="form-label">Mã Số Thuế</label>
                                            <input  type="text" class="form-control" placeholder="Nhập Mã Số Thuế">
                                        </div>
                                        <div class="col-4">
                                            <label class="form-label">Tên Công Ty</label>
                                            <input  type="text" class="form-control" placeholder="Nhập Tên Công Ty">
                                        </div>
                                        <div class="col-4">
                                            <label class="form-label">Tên Người Đại Diện</label>
                                            <input type="text" class="form-control" placeholder="Nhập Tên Người Đại Diện">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <label class="form-label mt-3">Số Điện Thoại</label>
                                            <input type="number" class="form-control" placeholder="Nhập Số Điện Thoại">
                                        </div>
                                        <div class="col-4">
                                            <label class="form-label mt-3">Email</label>
                                            <input type="email" class="form-control" placeholder="Nhập Email">
                                        </div>
                                        <div class="col-4">
                                            <label class="form-label mt-3">Địa Chỉ</label>
                                            <input type="email" class="form-control" placeholder="Nhập Địa Chỉ">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label mt-3">Tên Gợi Nhớ</label>
                                            <input type="text" class="form-control" placeholder="Nhập Tên Gợi Nhớ">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label mt-3">Tình Trạng</label>
                                            <select class="form-control">
                                                <option value="0">Tạm Dừng</option>
                                                <option value="1">Hoạt Động</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Nhà Cung Cấp</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Warning</h6>
                                            <div class="text-dark">
                                                <p>Bạn có muốn xóa nhà cung cấp <b></b>
                                                    này
                                                    không?</p>
                                                <p>
                                                    <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                    >Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="diaChiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Địa Chỉ Nhà Cung Cấp</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>