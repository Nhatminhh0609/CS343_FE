<template>
    <div class="row mb-3">
        <div class="col-12 text-end">
            <button class="btn btn-outline-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#themMoiModal">
                <b>Thêm Mới</b>
            </button>
        </div>
    </div>
    <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Tên Món Ăn</label>
                                <input type="text" class="form-control mb-3"
                                    placeholder="Nhập tên món ăn">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Slug Món Ăn</label>
                                <input type="text" class="form-control mb-3"
                                    placeholder="Nhập slug món ăn">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Hình Ảnh</label>
                                <input type="text" class="form-control mb-3"
                                    placeholder="">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Giá Bán</label>
                                <input type="number"  class="form-control mb-3"
                                    placeholder="Nhập giá bán">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">Danh Mục</label>
                                <select class="form-select mb-3">
                                   
                                </select>
                            </div>
                            <div class="col-6">
                                <label class="form-label">Tình Trạng</label>
                                <select class="form-control mb-3">
                                    <option value="0">Tạm Dừng</option>
                                    <option value="1">Hiển Thị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="card border-top border-0 border-4 border-primary">
            <div class="card-header">
                <h5>Danh Sách Món Ăn</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input  type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
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
                                    Tên Món Ăn
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Slug Món Ăn
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Hình Ảnh
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Giá Bán
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Danh Mục
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
                                    <button class="btn btn-success" style="width: 100px;">Hiển
                                        Thị</button>
                                    <button class="btn btn-warning" style="width: 100px;">Tạm Dừng</button>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button class="btn btn-info" style="width: 100px; margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatModal">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                        data-bs-target="#xoaModal">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Món Ăn</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Tên Món Ăn</label>
                                            <input type="text" class="form-control mb-3" placeholder="Nhập tên món ăn">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Slug Món Ăn</label>
                                            <input disabled type="text" class="form-control mb-3" placeholder="Nhập slug món ăn">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Hình Ảnh</label>
                                            <input type="text" class="form-control mb-3" placeholder="">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Giá Bán</label>
                                            <input type="number" class="form-control mb-3" placeholder="Nhập giá bán">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Danh Mục</label>
                                            <select  class="form-select mb-3">
                                                
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Tình Trạng</label>
                                            <select class="form-control mb-3">
                                                <option value="1">Hiển Thị</option>
                                                <option value="0">Tạm Dừng</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Món Ăn</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6><b class="text-danger">Warning</b></h6>
                                            <div class="text-dark">
                                                <p>Bạn có muốn xóa món ăn <b></b> này không?</p>
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
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>