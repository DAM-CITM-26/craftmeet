fetch('https://api.artic.edu/api/v1/events/search?q=workshop&limit=40&fields=id,title,start_date,start_time,location,is_free,is_sold_out,image_url,short_description')
  .then((r) => console.log('OK', r.status, r.ok))
  .catch((e) => console.log('FALLO', e))