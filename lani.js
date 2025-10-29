
function getData() {
    fetch("http://139.180.213.49/getdata.php?type=all")
        .then(response => {
            if (!response.ok) {
                console.error("Error fetching data:", response.statusText);
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Data fetched successfully:", data);

            const serviceLayout1 = document.querySelector('.service-layout1');
            const serviceLayout2 = document.querySelector('.service-layout2');

            // clear html
            serviceLayout1.innerHTML = '';
            serviceLayout2.innerHTML = '';

            // create 
            data.forEach((item, index) => {
                const serviceItem = document.createElement('div');
                serviceItem.classList.add('service-item');

                // set item
                serviceItem.innerHTML = `
                    <div class="service-item">
                        <img src=${item.imageURL} alt="">
                        <h3>${item.Title}</h3>
                        <p>
                            ${item.Content}
                        </p>
                    </div>
                `;

                if (index < 3) {
                    serviceLayout1.appendChild(serviceItem);
                } else {
                    serviceLayout2.appendChild(serviceItem);
                }
                
            });
        })
        .catch(error => {
            console.error("Error processing data:", error);
        });
}
getData();

// fetch using await, upload using formdata
//use 4.3 bootstrap, jquery
