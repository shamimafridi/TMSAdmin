import { AtGridOptions,AtGridColumn } from './../../../at-components/ATGrid/at-grid/at-grid-options';
import { UserService } from './UserService';
import { IUserListResponse } from './modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-journal-vouchers',
  templateUrl: './journal-voucher.component.html',
 // styleUrls: ['./atgrid-example.component.scss'],
  providers: [AtGridOptions]
})

export class JournalVouchersComponent {
  atGridOptions: AtGridOptions;
  atGridColumns: AtGridColumn[];
  constructor(private userService: UserService) {

    this.atGridOptions = new AtGridOptions();
    this.atGridOptions.pageCount = 1;
    this.atGridOptions.pageLimit = 5;
    this.atGridOptions.pageOffset = 0;
    this.atGridColumns = [
      new AtGridColumn('branch.name', null, true, "Branch"),
      new AtGridColumn('desc', null, true, "Description"),
      //new AtGridColumn('Cother'),
      //new AtGridColumn('Qualification')
    ];
    this.getUserList(0, this.atGridOptions.pageLimit);

    this.atGridOptions.columns = this.atGridColumns;

  }
  onPageChange(pageNo) {
    this.getUserList(pageNo, this.atGridOptions.pageLimit);
  }
  public getUserList(pageNo: number, limit: number): void {
    this.userService.getUserList(limit, pageNo)
      .subscribe((data) => {
        console.log(data)
        if (data) {
          debugger
          // this.atGridOptions.dataSource = data.page_count.docs;
          // this.atGridOptions.pageCount = data.page_count.total;
          // this.atGridOptions.pageOffset = data.page_count.offset;

          this.atGridOptions.dataSource =data as any[];
          // this.atGridOptions.pageCount = data.page_count.total;
          // this.atGridOptions.pageOffset = data.page_count.offset;

        } else {

        }
      });

  }
  columnSortedClicked(arg) {

    console.log(arg);
  }
}