var request = require('request');
var options = {
  url: 'http://www.qlcoder.com/task/17/solve',
  method: 'post',
  headers: {
    'Cookie': 'uuid=56b029de6e14e; Hm_lvt_420590b976ac0a82d0b82a80985a3b8a=1454390822,1454391840,1454396780,1454396824; Hm_lpvt_420590b976ac0a82d0b82a80985a3b8a=1454400057; XSRF-TOKEN=eyJpdiI6Ikl0UUt4VExcL0R5SEpiRU1lRVFYcnBnPT0iLCJ2YWx1ZSI6IjZtekRvTHJCenlGMzdWMDI4UHNITWpDS0dRaCtcL294WFpDbVZzRXE2OEV3NHo4K1RJWVhwSFI5VzZZMStoc01ObXVHNHBSbnR3ZTQrTitVbDRsdnVTZz09IiwibWFjIjoiODEzNTEwZjZlMjBjZWNhZDM4MTM1Y2IyMTYzZjBjYjZiYjhjYWIzMWZhOTM3Y2JmZjQ5ZWRkYzg0MWU0ODFmYSJ9; laravel_session=eyJpdiI6ImhqYk5UWXV3MGg0TlFFWFwvNDY1ZHdRPT0iLCJ2YWx1ZSI6IkQ1VUlMTGZXM0dvWFJ6bEUzUlVFVU5zZDc3TE1SNE51c2NHMFVuSld1ajVZeFVRcUlJZDkxUDU4eHVPTnpcLytDblpWTW9iRlJ0dXdTTCtUQm5EK3hTZz09IiwibWFjIjoiNjU3YzYyOGY2ZjJhNzU4ZWY2OGE3ZTliZTVkMGMxOTIzOWYwODhiOGFlMWNiZGZmNDBiMDMwYWMwZGUzYWE5YiJ9; è¿é¢çç­æ¡æ¯oreo=eyJpdiI6IlwvXC9Cd3ZpOHNWekZJTmE3YzZZd3kwUT09IiwidmFsdWUiOiIzbE9EMXk1K3FVVmFTOEpIZmFoTktnPT0iLCJtYWMiOiI0MmEzNjU5MTI5NGQxMzhiMzljZmZiNTIxNGMwMzQ0MzBmYTY1NTA3N2UzMDA0MzhmZGNiNzQ2Y2ViYWYxNmMzIn0%3D',
    'Referer': 'http://cpc.people.com.cn/'
  },
  form: {
    _token: "sErimrlVmhrMaN2ff7ApvP8wfEQOZx8rglJmCo2z",
    answer: "referer"
  }
};
request(options, callback);
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

