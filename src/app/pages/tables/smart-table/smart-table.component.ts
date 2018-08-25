import { HttpClient } from "@angular/common/http";
import { UserService } from "./../../vouchers/journal-vouchers/UserService";
import { Component } from "@angular/core";
import { LocalDataSource, ServerDataSource } from "ng2-smart-table";

import { SmartTableService } from "../../../@core/data/smart-table.service";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./smart-table.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ],
  providers: [UserService]
})
export class SmartTableComponent {
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
        // filter: {
        //   type: "list",
        //   config: {
        //     selectText: "Select...",
        //     list: [
        //       { value: "Glenna Reichert", title: "Glenna Reichert" },
        //       { value: "Kurtis Weissnat", title: "Kurtis Weissnat" },
        //       { value: "Chelsey Dietrich", title: "Chelsey Dietrich" }
        //     ]
        //   }
        // }
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

  constructor(
    private service: SmartTableService,
    userService: UserService,
    http: HttpClient
  ) {
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
    //userService.getUserList(2, 2);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
