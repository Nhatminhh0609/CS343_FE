<template lang="">
    <div class="row">
        <div class="col-5">
            <div class="card">
                <div class="card-header">
                    Danh Sách Nguyên Liệu
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                            <button class="btn btn-primary">
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">Tên Nguyên Liệu</th>
                                    <th class="text-center align-middle text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <th class="text-center align-middle text-nowrap"></th>
                                        <td class="align-middle text-nowrap"></td>
                                        <th class="text-center align-middle text-nowrap">
                                            <button class="btn btn-primary">Thêm</button>
                                        </th>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-7">
            <div class="card">
                <div class="card-header">
                    Danh Sách Nhập Kho
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">Tên Nguyên Liệu</th>
                                    <th class="text-center align-middle text-nowrap">Số Lượng</th>
                                    <th class="text-center align-middle text-nowrap">Đơn Giá</th>
                                    <th class="text-center align-middle text-nowrap">Thành Tiền</th>
                                    <th class="text-center align-middle text-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <th class="text-center align-middle text-nowrap"></th>
                                        <td class="align-middle text-nowrap"></td>
                                        <td class="text-center align-middle text-nowrap">
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="text-center align-middle text-nowrap">
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="text-center align-middle text-nowrap"></td>
                                        <td class="text-center align-middle text-nowrap">
                                            <i class="fa-solid fa-trash fa-2x text-danger"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <label for="" class="mb-2">Chọn Nhà Cung Cấp</label>
                                            <select name="" class="form-control" id="">
                                               
                                            </select>
                                        </td>
                                        
                                        <td colspan="1">
                                            <label for="" class="mb-2"><b>Tổng Tiền</b></label>
                                            <p class="text-danger"></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6">
                                            <label for="" class="mb-2">Nhập Ghi Chú Nhập Kho</label>
                                            <textarea cols="30" rows="4" class="form-control"></textarea>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-end">
                            <button class="btn btn-primary">Nhập Kho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>