<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                Danh Sách Hóa Đơn Nhập Kho
            </div>
            <div class="card-body">
                <div class="table-responesive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td class="align-middle">Từ Ngày</td>
                                <td class="align-middle">
                                    <input type="date" class="form-control">
                                </td>
                                <td class="align-middle">Đến Ngày</td>
                                <td class="align-middle">
                                    <input type="date" class="form-control">
                                </td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-primary">Thống Kê</button>
                                </td>
                                <td class="align-middle" colspan="3">
                                    Tổng Tiền: 
                                </td>
                            </tr>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Mã Hóa Đơn</th>
                                <th>Tổng Tiền</th>
                                <th>Nhà Cung Cấp</th>
                                <th>Ghi Chú</th>
                                <th>Chi Tiết Hóa Đơn</th>
                                <th>Nhân Viên</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template>
                                <tr>
                                    <th class="text-center align-middle"></th>
                                    <td class="text-center align-middle"></td>
                                    <td class="text-end align-middle"></td>
                                    <td class="align-middle"></td>
                                    <td class="text-center align-middle">
                                        <i class="fa-solid fa-notes-medical fa-2x text-info" data-bs-toggle="modal"
                                        data-bs-target="#ghiChuModal"></i>
                                    </td>
                                    <td class="text-center align-middle">
                                        <i class="fa-solid fa-circle-info fa-2x text-success" data-bs-toggle="modal"
                                        data-bs-target="#chiTietModal"></i>
                                    </td>
                                    <td class="align-middle"></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="ghiChuModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Ghi Chú</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <textarea class="form-control" cols="30" rows="10"></textarea>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="chiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Ghi Chú</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="table-responesive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr class="text-center align-middle">
                                                <th>#</th>
                                                <th>Tên Nguyên Liệu</th>
                                                <th>Số Lượng</th>
                                                <th>Đơn Giá</th>
                                                <th>Thành Tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template>
                                                <tr>
                                                    <th class="text-center align-middle"></th>
                                                    <td class="align-middle"></td>
                                                    <td class="text-center align-middle"></td>
                                                    <td class="text-end align-middle"></td>
                                                    <td class="text-end align-middle"></td>
                                                </tr>
                                            </template>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>