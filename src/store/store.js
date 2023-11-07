import { atom } from "recoil";

export const timeTableState = atom ({
  key: 'timeTableState',
  default: {
    mon:[{ start:9, end:11, content:'국어', color:"red", id:1 }],
    Tue:[{ start:10, end:13, content:'영어', color:"yellow", id:2 }],
    Wed:[{ start:12, end:14, content:'수학', color:"orange", id:3 }],
    Thu:[{ start:15, end:17, content:'사회', color:"blue", id:4 }],
    Fri:[{ start:14, end:16, content:'과학', color:"green", id:5 }],
  }
})