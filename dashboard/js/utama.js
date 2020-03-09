	const btnPie = document.querySelector('.pie');
	const sidebarMenu = document.querySelector('.sidebar-menu');
	const backSidebarMenu = document.querySelector('.background-sidebar-menu');
	const signOutSidebar = document.querySelector('.sign-out');
	const subItems = document.querySelectorAll('.sub-item');
	const dropMenus = document.querySelectorAll('.drop-menu');

	btnPie.addEventListener('click', function() {
		this.classList.toggle('active');
		sidebarMenu.classList.toggle('active');
		backSidebarMenu.classList.toggle('active');
		signOutSidebar.classList.toggle('active');
		subItems.forEach(subItems => {
			subItems.classList.remove('active');
		});
		dropMenus.forEach(dropmenu => {
			dropmenu.classList.remove('active');
		});

	});

	

	backSidebarMenu.addEventListener('click', function() {
		this.classList.remove('active');
		sidebarMenu.classList.remove('active');
		btnPie.classList.remove('active');
		subItems.forEach(subItems => {
			subItems.classList.remove('active');
		});
		dropMenus.forEach(dropmenu => {
			dropmenu.classList.remove('active');
		});
	});



	//sidebar
	const itemsSidebar = document.querySelectorAll('.click-item');

	
	// itemsSidebar.forEach(item => {
	// 	item.addEventListener('click', function(e) {
	// 		console.log(this.id);
	// 		const subItem = item.children;
	// 		subItem[1].classList.toggle('active');
	// 		const childDropMenu = subItem[0].children;
	// 		childDropMenu[1].classList.toggle('active');
	// 	});
	// });

	itemsSidebar.forEach(item => {
		item.addEventListener('click', function(e) {
			const subItem = item.children;
			const childDropMenu = subItem[0].children;
			//
			const nextESibling = item.nextElementSibling;
			const subNextESibling = nextESibling.children;
			const childNextESibling = subNextESibling[0].children;
			//
			const prevESibling = item.previousElementSibling;
			const subPrevESibling = prevESibling.children;
			const childPrevESibling = subPrevESibling[0].children;

			//
			const next2ESibling = item.nextElementSibling.nextElementSibling;
			const subNext2ESibling = next2ESibling.children;
			const childNext2ESibling = subNext2ESibling[0].children;
			//


			if(this.id == 'election') {
				subItem[1].classList.add('active');
				childDropMenu[1].classList.add('active');
				subNextESibling[1].classList.remove('active');
				childNextESibling[1].classList.remove('active');
				subNext2ESibling[1].classList.remove('active');
				childNext2ESibling[1].classList.remove('active');

			}

			else if(this.id == 'add') {
				subItem[1].classList.add('active');
				childDropMenu[1].classList.add('active');
				subPrevESibling[1].classList.remove('active');
				childPrevESibling[1].classList.remove('active');
				subNextESibling[1].classList.remove('active');
				childNextESibling[1].classList.remove('active');
			}

			else if (this.id == 'view') {
				const prev2ESibling = item.previousElementSibling.previousElementSibling;
				const subPrev2ESibling = prev2ESibling.children;
				const childPrev2ESibling = subPrev2ESibling[0].children;
				subItem[1].classList.add('active');
				childDropMenu[1].classList.add('active');
				subPrevESibling[1].classList.remove('active');
				childPrevESibling[1].classList.remove('active');
				subPrev2ESibling[1].classList.remove('active');
				childPrev2ESibling[1].classList.remove('active');
			}

		});
	});




	//sidebar