let total_seat = 0;
let remain_seat = 40;
let total_price = 0;
let net_price = 0;
let apply_coupon = false;

document.getElementById('coupon-apply').addEventListener('click', ()=> {
    const coupon = document.getElementById('coupon').value;
    
    const coupon1 = document.getElementById('coupon1').innerText;
    const coupon2 = document.getElementById('coupon2').innerText;

    if (apply_coupon) {
        alert("Already applied");
        return;
    }

    apply_coupon = true;
    if (coupon == coupon1) {
        net_price = total_price - (total_price * (15 / 100));
        
    } else if (coupon == coupon2) {
        net_price = total_price - (total_price * (20 / 100));
    }
    else {
        alert('Invalid Coupon Code');
    }

    document.getElementById('grand-total').innerText = net_price;
})

function selected_btn () {
    const seats = document.getElementsByClassName('seat');
    // console.log(seats);
    const seats_info = document.getElementById('seats-info');
    seats_info.innerHTML = "";

    for (const seat of seats) {
        seat.addEventListener('click', ()=> {

            let seat_num = seat.innerText;

            if (seat.classList.contains('bg-[#1DD100]')) {
                seat.classList.remove('bg-[#1DD100]')
                seat.classList.add('bg-[#F7F8F8]')

                total_seat -= 1;
                remain_seat += 1;
                total_price -= 550;
                let seat_details = document.getElementById(seat_num);
                seats_info.removeChild(seat_details);
            }

            else if (total_seat < 4) {

                seat.classList.remove('bg-[#F7F8F8]')
                seat.classList.add('bg-[#1DD100]')
                total_seat += 1;
                remain_seat -= 1;
                total_price += 550;

                let tr = document.createElement('tr');
                tr.id = seat_num;
                document.getElementById('remain-seat').innerText = remain_seat;
                document.getElementById('total-ticket').innerText = total_seat;

                tr.innerHTML = `<td>${seat_num}</td><td>Economy</td><td>550</td>`
                seats_info.appendChild(tr);
            } 

            else {
                alert("You can't buy more then 4 tickets.")
            }

            if (total_seat == 4) {
                document.getElementById('coupon-apply').disabled = false;
            }

            document.getElementById('total-price').innerText = total_price;
            document.getElementById('grand-total').innerText = total_price;

            document.getElementById('next-btn').disabled = false;
        })
    }
}


selected_btn()