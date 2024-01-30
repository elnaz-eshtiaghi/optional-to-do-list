let _all = document.getElementById('_all')
        let _done = document.getElementById('_done')
        let _delete = document.getElementById('_delete')




        function _sub(e) {
            e.target.parentElement.classList.toggle('pb-1')

            // .....input.....
            let _inp = e.target.parentElement.previousElementSibling.value
            if (_inp != '') {
                let _li = document.createElement('li')
                _li.innerHTML = `
                <input type= 'checkbox' onclick='_check(this)' class="col-1 me-1"/>
                <h6 class="col-6 ">${_inp}</h6> 
                <button onclick='_del(this)' class="col p-0 m-0"><i class="bi bi-eraser "></i></button>
                <button onclick='_edit(this)' class="col p-0 m-0"><i class="bi bi-pencil"></i></button>
                    
                `
                _all.appendChild(_li)
                e.target.parentElement.previousElementSibling.value = null
                e.target.parentElement.previousElementSibling.focus()
                document.getElementById('clrbtn').classList.remove('d-none')

            }
        }

        // .....check.....

        const _check = (x) => {
            // console.log(x.checked)
            if (x.checked) {
                let _in = x.nextElementSibling.innerHTML
                let _li = document.createElement('li')
                _li.innerHTML = _in
                _done.appendChild(_li)
                x.parentElement.remove()

            }
            else {

            }

        }

        // ......delet.....

        const _del = (y) => {

            let _inp = y.previousElementSibling.innerHTML
            let _li = document.createElement('li')
            _li.innerHTML = _inp
            _delete.appendChild(_li)
            y.parentElement.remove()


        }

        // .....edit.....

        const _edit = (z) => {
            z.parentElement.contentEditable = 'true'
        }

        // .....clearall.....

        const _all2 = (e) => {
            document.getElementById('clrbtn').classList.add('d-none')
            let _list = document.querySelectorAll('ol>li')
            _list.forEach((val) => {
                val.remove()
            })
        }