    const API_KEY = '70e96f8fcca842a575e8c9f10add9bc840d540def48c833f8d72249f';

    document.addEventListener('click', (event) => {
        let ipAddress = event.clientX;
        fetch(`https://api.ipdata.co/${ipAddress}?api-key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.country_code === 'ID') {
                    window.open('https://c.lazada.co.id/t/c.bV9qMg?sub_aff_id=Okelah', '_blank');
                } else {
                    window.open('https://s.click.aliexpress.com/e/_Dnr71Q5?bz=300*250', '_blank');
                }
            })
            .catch(err => console.log(err));
    });
