import { UserService } from "./UserService";
import { IUserListResponse } from "./modal";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AgGridNg2 } from "ag-grid-angular";
import { IGetRowsParams } from "ag-grid";
import { Observable } from "rxjs";
import { ServerDataSource } from "ng2-smart-table";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "at-journal-vouchers",
  templateUrl: "./journal-voucher.component.html",
  styleUrls: ["./journal-voucher.component.css"]
})
export class JournalVouchersComponent implements OnInit {
  ngOnInit(): void {}
  settings = {
    // pager: {
    //   display: true,
    //   perPage: 10
    // },
    actions: {
      columnTitle: "Filter",
      add: false,
      edit: false,
      delete: false,
      custom: [],
      position: "left" // left|right
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      ["branch.name"]: {
        title: "Branch"
      },
      _id: {
        title: "ID"
      },
      desc: {
        title: "Description"
      },
      date: {
        title: "Description",
        filter: {
          type: "date",
          config: {
            selectText: "Select...",
            list: [
              { value: "Glenna Reichert", title: "Glenna Reichert" },
              { value: "Kurtis Weissnat", title: "Kurtis Weissnat" },
              { value: "Chelsey Dietrich", title: "Chelsey Dietrich" }
            ]
          }
        }
      }
    }
  };

  source: ServerDataSource;

  constructor(private userService: UserService, http: HttpClient) {
    this.source = new ServerDataSource(http, {
      endPoint: "http://localhost:3000/api/voucher",
      pagerLimitKey: "limit",
      pagerPageKey: "page",
      sortDirKey: "order",
      sortFieldKey: "sort",
      dataKey: "docs",
      totalKey: "total"
    });
    this.source.setPaging(1, 10);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
