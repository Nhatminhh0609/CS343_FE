<template>
    <div class="card">
        <div class="card-body">
            <h3>Hóa Đơn Bán Hàng</h3>
            <hr>
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
                    <tr>
                        <th class="align-middle text-center">
                            #
                        </th>
                        <th class="align-middle text-center">
                            Tên Bàn
                        </th>
                        <th class="align-middle text-center">
                            Nhân Viên Thanh Toán
                        </th>
                        <th class="align-middle text-center">
                            Tiền Trước Giảm
                        </th>
                        <th class="align-middle text-center">
                            Phần Trăm Giảm
                        </th>
                        <th class="align-middle text-center">
                            Tổng Tiền Đã Giảm
                        </th>
                        <th class="align-middle text-center">
                            Ghi Chú
                        </th>
                        <th class="align-middle text-center">
                            Chi Tiết Hóa Đơn
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="align-middle text-center"></th>
                        <td class="align-middle text-center"></td>
                        <td class="align-middle text-start"></td>
                        <td class="align-middle text-end"></td>
                        <td class="align-middle text-center"></td>
                        <td class="align-middle text-end"></td>
                        <td class="align-middle text-center">
                            <button type="button" class="btn btn-light" data-bs-toggle="modal"
                                data-bs-target="#ghiChuModal">
                                <i class="fa-solid fa-comment"></i>
                            </button>
                        </td>
                        <td class="align-middle text-center">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#chiTietModal">
                                <i class="fa-solid fa-circle-info"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="modal fade" id="chiTietModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Chi Tiết Hóa Đơn</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th class="text-center align-middle">
                                            #
                                        </th>
                                        <th class="text-center align-middle">
                                            Tên Món
                                        </th>
                                        <th class="text-center align-middle">
                                            Số Lượng
                                        </th>
                                        <th class="text-center align-middle">
                                            Đơn Giá
                                        </th>
                                        <th class="text-center align-middle">
                                            Thành Tiền
                                        </th>
                                        <th class="text-center align-middle">
                                            Phần Trăm Giảm
                                        </th>
                                        <th class="text-center align-middle">
                                            Ghi Chú
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="text-center align-middle"></th>
                                        <td class="align-middle"></td>
                                        <td class="text-center align-middle"></td>
                                        <td class="text-center align-middle"></td>
                                        <td class="text-center align-middle"></td>
                                        <td class="text-center align-middle"></td>
                                        <td class="align-middle"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="ghiChuModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ghi Chú</h5>
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
</template>