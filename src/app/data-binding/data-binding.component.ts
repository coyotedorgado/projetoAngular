import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit{
  public nome: string = 'lucas';
  public idade: number = 21;

  public position: {x: number, y: number} = {x: 0, y: 0}
  public titleimg: string = 'dogsalcischa'
  public dogchorro: string = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGBgaGBgYGBgYGhgYGBgYGBgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDExNDQ0NDQ0NDQ0NDQ0NP/AABEIAMMBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EADoQAAEDAgQDBwIGAQQBBQAAAAEAAhEDIQQSMUEFUWEGEyJxgZGhscEUMkJS0fDhFWJy8bIWIzOCkv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAAICAgICAgEFAQAAAAAAAAABAhESIQMxE0FRYSIEQoGh8DL/2gAMAwEAAhEDEQA/AMNSfnvoF3EGeDqkougQnYky1ICiovcDorGlWfGiisxIaYhWWGxAcLCFnJGkWwTMx6JryQpVRp2Ucjmoouw+GqEq1wJ8bfMKBhWzoFY4ZhD2yIuE6plxej0zhR8Hosx2zHgPktLwg+D0Wd7ZN8B8l2ro4pdnjVdviPmm5UXEfnd5pmZZlDci7InZkuZGgBFqaAiuTQ08j7JAKGJ3dpWg8j7FOAd+0+xTAZ3aXu0/I/8Aa72KXuX/ALHexQAOk3xDzV3kOVVmGw787fC7XkttQ4dLJhCjYpMxGIcQUGVbcbwWV0hUwBWbjQJDiUgclLCmQUUOggcjMeo7UVqTRUUT6D0lZkoFIqY1krOWhvTAsZZCexWrqYhQarboTNa0Rsq5FypUwLRqc51lDpYnMbIlR/hVtmI7DYZhdJVkaDWtkQqWcoF7o9N7yNbLOVlx7JVN86ohYDqFCaSE5rjzSTNGjScCw7C5W2Kw4BB6hZ/s4SHk9FocfXkDzC0UlRndM1XBh4UnFeGB4giV3Z+sC0K7c5pWzetGTW9nnjuxdFziSxSKXYWh+wLcgNRWOasal8lPExbexFD9gTx2KofsC2udq4vCeMidGNb2PoD9DfZPb2Tofsb7LWF4SZwqxkGjLjsrR/Y32Rmdl6X7G+y0YqBPFYIphoz7ezVP9jfYLncApj9DfYLQGuECpigjFi0ZqtwJguGD2UavgQGmyv6+MHRU3EMcIOiqEWmDaPPe0eHF1lRhlrOOYgOJVExqy5ZUzp4YqSIzMNZRsRh1bZVFxIWSk7NZcaSKnKiNSuF0oWxzvTHsKm0DIUII+HfCGrE1ZNzGFHqNMqTS8VgiVKBCmX4hGVIroXKZlXKM0PIraVUAypeGxGYwqlzk/Cv8S0cdEouHUhKscPRBGyqgjYZxB1WZokGqtgpjCiVENgUFssMBisp1VhXxeYKipjxKyYPCm0TWyzwPaE0mwtFw3tTnF15viipHD8RlWim0tGU1fR6PW7UMah/+rmLDubnSDAq1zfQlBs3B7YNSHtk1Y5vDkjuGBHm+h+M2B7ZNTHdsQsm3hgSnhiPMHiNSe2IQH9slmzwxMfwxPyh4zQP7aFRqnbA81RHhYXDhY5I8wvGWNTtW47qsxfaFzt0ruFjkhu4WOSfmH4iqfjC8o9EqYOGxsiMwSxm8jo4vxIxUPEq5/CINXBysktmspJozbxdc0FXv+ndEn+n9FupI5XF2UsJDKuXYFCfgk8hYsi4DEQ6+6t31PCq/8Gn926IlNu0JRO7xcmd0VyxwHiVIwjkWhhXAyVsm8NHJBx+CDWyrc2NQKIItLUIRCJRNwpKXZJemNTqjk1gJ91CRbHgXVoRDFWuYQVctZLPRUQuzOVHy6FIpNCgYkFr0dtSAqokt8M4BXeGpghZnAvzOAWxwVKyhlxFZSCd3IUgU03FVmUmF7yGtGpPwBzKRegbcOE78MFCwnaCg5jnl2VrYidXToGjc9FJo8Rc4iaTmNIlpfILhzAiPqrwldEZRqxxwwTThQrCq9jYnfZU/HeNsoUXObep+VoIsCdHHoE8JfAsl8mc7Q8bLKho0Q2W2e4ifF+1o6KsHG8SBJewxzY37J3BcKKhe9xk5zJ1JJgz8qNxwZHQLA/ZbRjFLZk2+zRdnse6ux7ntaC10S0QCCJ0Vp3fRV/YjDRh3O/dUd7NAb/Kv3UVhL/p0axuiuNIJvdjkrB1JCdTUFkNzByQ3MCmOpFCNJFCIhamuAUl1EoLqJVJARXwhuhSH0SgupFNEtkV5QHvUt+HKA/ClXom2Azhcn/hSuRoVs1IqN5qFxSq3LqqF2PPNAr4om0qMS7GlOojxBDDk+lqEAWDcPmU2lhQEuEpOI0VnQwc6rJtmtIratIHQKwwzPBEbKc3CNGqDXrtbYJpia9mQ4phTnnqoxw7uavMc8FVnedFpkjnk1ZK4JhyHyVuMM5sarA08UW6SpbeMvHNTplxnFG6q12Ma573ANaCSegXmnFuMPxL/ABWbMMZsORPM9VI4txV76ZZsSJ9L/wALOUK0OHnbz2W3HFJWTOeWkXeGwtJjwXOlpIAe4lsuDQX5Y0gnKCdbc1d8EfUe/I5zntYHETJDWk2bO0/ZZdlV7qwazMZI8LZ138I1XpfZvgr2BznZhOjNdoGYj5WiZFFJxDiL6dVsNzuaLNdJbLhqR0VdxhzntIMZi3M5oY9oc0mz2BwGZu0iQp3H5zvqOEQyBmFnNuHgdRPpIWepY1rnS2ZDT43Oc8tGzW5jYTt5otdh9BWUqmFw7agsKwD2tn9MWIO+oVBjMY6pdx00VpVxWIr0qVCQ5jLMbaW2gmeQH1RMDwxjCC6XObctMZZ2MbhS3Stg2brgVBtLD0mGzg0F3/J3id8lTHVm81jn8TfKG7iL1zOSK80Vo2ffM5ppezmsZ/qD078e9JNDXOma7OxIXsWPOOem/jn809FeVGsfUYmGoxZU4p/NCdjX81Wg8iNW57ExzmdFlPxj+aecQ/mnSDNGlL2IT3s6LOOrP5oTqj+ZT0LNGj71nRcs3L+ZSIpBmiwZTZ0RAKfT4WcDlzSigs0veU+nwiMr0xy+FmQERlIlGIZGzo8Ypjkkqccb+mFjcsJ2H/OEsEV5Ga1+Pc4KIXEm5S02HKiMprKUsUTKegT2ShfhlNFJFFNc7mccpNsqzhU38KrYU09tMIXI0CkyixHDyWugXgkeY0VRh+EVJzOGVolxJuYF4jrYLdBgVf2hcGUDGriB6an4HytuPnleK9lRk0wn+o0m0Yw0MeWvpvdYOBcIkHW91l8Fx7E0z4MQ9pnVxJA6EGeqZhsrnS6ImZPIX+myU06DnlwqOaDfLkBg6wDIsunjWNo6pyujf4PFficPkxcFznh5LYYWgAQW5vy+HW28LLdo+A08O3PRqh7XSIsSLxqPb+2j4wPBewueGkyAC2IIloL99rBRm4toovpuGaSYM6OcWxHOICyUZKWSfvaNHKLjTXrs03BcCKeHa+xe9rXG35QRZqpeJjJUa8aGQ4dVZsqOZRYZkZMp6FtiPhRKzQ+m87jK77LraTVHMDqU5uN0EsKseEUw9kbtOX+PhSn4QBec24txMHFop20kZtAqwp4dS2YUKXIEqKN9Bd+HKvX4YLmYYJZDsoTSMIBoXWkOECE/BhNTHbKSnh1L/CKa3B7ormgBV5FRTkVDsLdPGGU8Qkqwp8jJsgfhwuUmQuTzYfyZFrUQ00PvQj4d2c5QJK7mdAxjVNZMaI1HAGYIU6vQhsQsZciuiJS2UtWmdUzDSHhWdRltFHYy8wnmqBSTNLgWSyShi7knCsRaCrFlITK45ulRMnaoYyklyI7nAWQg5Y7IaSELQguKWoUkoRDOFQC50CyPG+JGpUc39LWuDR1i5VpxPFw4tGjBJ6uWTBkk+fzqvR4OFRSk+2awjStk/C1GmWmxgEH+VwY2ZLb8xoeqry+LhOfinHU+y2cXdo2UlWydiq0DKNemyDhGFzi7ZgJ6SLhRWjfdTjVDGZBqfzff5VRikhOVs0VCoO5LJkBjHA9Yg/Ki8Eqg940/sKh4Nx7p55MA9iP4Kj8OxBYHkau8I9U0yTSdmyB3hG7reysnmVV9nWFpeD/tsrh4C87mlU2ZSewTAih6YDCaXLFuybDl0pZhAL1znJDHd/dDfXQnOTHOToTYc14CivqyhvemgqlEhs5zimF5RKmiiueqSFYaVyB3i5Ogso6fC3OMLU8E4O1rZ3+VJw+EA2UrD+ErSf6i1o68hRhgTolqYQFEL5KLnlckpu7I1ZXnh4JunnhTQFIeZTDVOhRm2UnGtnMwIboFPw1EQoAqlL+IIKmSb9ibiT30mqC9oSPqHWUN9WySTM5SXoHVemveGtLuQJ9kOpfRCxh/9l8/sK1itpCu2ZHF4o+InV7pVe0qSKJeCRtaFHcwgwV61ro3oYSkXFcmApcntQwp2ApAguOxsgCyjJQI0JaT9EPhWHa4ZuToHmmcSryweRHuo+FrwxoFjmn0UtPVfJcWt38Gkp1H06ni0eAARzCtaNeVSdnqRrPc958LLNG081ohhgFw/qXHPRzyjbAV6iCHFTAwJG0lzponEi0ySjFpRhRATgAhyKUSI9iZ3akVAgRZCJkqGMoJrqd07vMqYalpV7J0Cqt2QjTCfmkrhyVIkH3YXImQrkWMu6VQGUrW3BQ3UwAnsBXOzVPY4gSSkiLpjmmJXA3A2RQxC5NBlFLQCUBtK5KEJsMx4Tq7ATZRiwokOKKJ7OdTOyVtPYo9BkalK8ybIsMfZGdhSCoXFqDjQqR+2fa6tnlIGSCDoQQfUJxk00ysEtnl+HxjmaXTn1w8y4XhBq04c4ciR7FXuJotxHdspABzWAXtMDQr2G1H8v7NbdFBluufTI2RcRRfTcWuaWuGx+3NN7+dVVpq0ANrVJbUy2RHFuWQh4amHva2YBIk8huhNVYNUa7sxw5jqD6tSDnloB/Sxs/JKocbwwtdTa2/eadATb4RKHFmtqQARSbLWtmfU+d1d4Co2o6m8H8s+E/pgW+q5nlFuT/3wUqxfyW3DeHto0wxt41J3J1UoOSEbynU6YdqV58puTtmdHQBokDFKJaBEXQiQdVKYkgLWiUj6cFPLYNkx4T+h0BeFHqsMKRVqCEN1S0JrRMlZCNFx1TDSgwrAKPiaB1lWpEOIHJAKjtN1Kcw5QmNpppktDLrkfu1yLCi1eJPRP70C3RRC5zrg/l1CY9pMGdTELGi3P4JHfHkl70bhRgYdGyeBcbkmf8ACdInJjmvGh1XZ015aT5xMpjqmwGv9+iKFZJFVpExG3qmU6koNchogGdZ90EVb2/sBFBky1ztEjdRnPFoKhVcQIHOFGZUObqnGBTkWrHkmN0Z75BGhuq+niWhxnWL+aZiMXHTlzRi7GpNGOxWBqU6jg5pMzBAJBnlCuuyeEcHOe4FsDK2REzclWX42S35Ta2Lje66pcspRxaLtuJcsyEgPDXHqAVS9qsVTptyspszPafFlAgdOqG/iIt9eagcRIrNguh02J+iz44VNOXQJ0ZQLR9meEl57x0BoMAbud/Cif6PGrx6BaHC4hrGsawWG/1JXXzcv41EbkqE4t2XY5wNJ2XmNRPNLwrgppOzZ5EQREX5qxbVk6ojwIPiXI+TkaxvRNslUWyD0RKLDBUJj8oE/wDakUsTrsJWFAmSGNIEndNfrdNqVHC35pFkFtY6JOI8l0SW1LQmZJOqYXkRbeICdVAgkAppMGwL6cugIRpmY9k91Rsf2yWq6W+EaAmfLVUvoWhvc8ymupE2myQiTHty800Og38rJg2gldzWthRqMFmYfKfUaJBdpshPc2Dtaw9VSiDkhMh5rkJtY/X6rk8SMkWjnAEHQG8c9ilIGaZgyCBzn/CCST4TF9OU/aUBzjLeevI/2PqslEGqJVWq0m1iDM/XzTXubMi0weg1QWt2A+et7+yY95iIk2ga25dU1ETR1avaI1IhApVTJ3m4jp9P8JrHibwMp67aD+80WmxsGLOF7HrfzV0kiKsbXrX5afIF/hDq1iDbmB6ItShJIGuxB2md90RmF8F3X1Plt56H+lFpDqyE2sSQANbnpySTBM+hUl9BoHI89bXMHl0Sd1mNr6xty9PUKrQYkQvMjSJk855JMS+Trpb+/ClMw5BENn7xf+VzcLMuyx/t808kWkUr3vBskzukggyQr9mBFj+qeUgzOkDWRCV+Eb4g6AbC17zcN91XkRatIzNSTblYKO5ruq0T8HMwOWmx+9lw4eC3TTW06XuVa5Eg37KJjXHqdlIoU3ibq7pYNuxABvcfHNSWYdtrEAxMCddvZTLlQLZW4Yvkb6X+ytaTWn80iE9uFkQ20mwPtJHJSaWHM6tItNiIgc9NYWTkmUkRXsE75Y16pzGAxBidypDqd4m25AnTePRdSYNIJB3Ou59NlLQNDGOvAufXQ/ZK2o2XZuieykdRaYi//U6oLabpMtsQRls6bn39OSlJdk7HNqGQQOQn6+qOyq68xlFj1J0QKRcCfCTJBAFgbTDp05+iUAgAiAdADpm2M87lNi2iPiX3iB9t7ptzA6j5H/aU0JEk9SSfTdGptBEiYMSbWHRFonbEcDltMxE7DLsFwAuSZ0AgaDdc9sC2YcuW05gbhNykDpfQ/XkLj3QJsG6m2dXEbfzCV9FuSb3kzvNvDB/t0ambgG5J2tfy1jWyH35cOu08hy81SdBoj903kflcnOq82+x/wlTtiJTtiRYW5zzhMeXZiZ2tM3mwA5WRO8OaQZM63jpvpqjNBkiIvr6f3VY3ReiE92YXNumxtPyErmCYvFpdBgzMzHLRTGMkcwJ5cjP8rshyg5QY09QJnndGQqIf4IRDWjpvcb+6ezBy0AmQSZ0sfS/K6lBkt5R53sYvCRlUN1GtrCTYH21+E8mUqIjqI5mbSDG+sW/spz8KReZB9tNB6/VSXVQHHJpzBtcFJi6ZbY5Y2iwk7HkQi2TojfhZkzpMk6ki8W1NzdGo4YEQAZN5HLT6hIACbkwddRYbR6owpZWEnc6TzOnuhsaf0B7hrTe+9pkfz/lc8AGwMAX5XtfrJRS0zBjQRsL2ykc5hc7cu3FtdRaRHmErKv4BsbeHfldpFvj1TmYZjSALgnfa39+VJLgYHhB0tEdfNOrjbQg3G42FkWNAWYQakSddLxGyZUwt7C0TN7+cm41ClNqtAjKDH5p/NJ1N9koqsy7zcCL8+nI7ckWyrtEbDsBOmWQdfECSABECRP8AeaUMIJkzJcSLjLPTYafKlPblgwTpvte/l/ITLCSR0E2Px5IbJIbGGTJmMwnaATcHbZOpMkzAPUnQ62H9+6lvqCNBMXAmD001TqT2kERtfNa/IfFuqLHFJMC6ibG4zAHYbzBPP+U6nSDc2syBseUX31ARAxrhraftv/lCDxrEnmPbxD7obHasdXpMNwcv+0nQm/8AOmt1GYH5sthBvaYt9L/KI14n8ojUTf0+E15HhiPFbyA8vZCJyjYV2HcHNiCYM8j+bL5Wy6c0Grmm58M6W1tfyuupO/NNgBDRMWM6H1+qSqXFxJjQAZSYJFxO4H8KhehhYZLspN5uYBN9zYBPLPDfUAyeVuguP490YXAzrrYmNdPPUpcHUzEjk1xvAnw3bG5skNUAfAJaZznUmOtovyO6FWLnGRrawEk6i/yfQIldwkGdY5eWh90ufQzEA77zr7D5VCpMFSpmBLY28Uyedzb480xzWhw8RmxvcfpiI03n0R3VhEgeZAEyJ9tYQe8a46eo56f3zTsMUJmdsLdB7/K5EHp8Lk8gxQdv5T5n4MI9P8h8/wCVy5YvoIgaev8A9f4Uppj/APS5chguzq9vg+vNRhcs/wCRHwVy5KPRMjgwZnCP7ZMxmh6PH3XLk12L0Of/APG472v7JW6N/wCJ+pSrk/2j9CVHm9/0/UpMVbIRbf5C5cmhegVF5zE+f0Uym8kukzYfVIuSl2JA2CSZ5O+ynvaIaYH5HbDmlXKfZcfYv6QhZpJ8vsuXKpdGy6Fpiw9UKrrG3L1XLkLoUvQ5zrE9D8Jjbe/2C5cl6MpdkfNc+RS6Bo6rlya7J9ETEPMuvunv8LZbYlskjexXLlYR7HVnS8eQ/wDFJT0b1dfrZIuQjQEG2P8Af1BNZr6/wuXIRHs57zB/48hzTOX/ABSrkxBYXLlyBn//2Q=='
  public cordmouse(valor: MouseEvent): void {
    this.position.x = valor.offsetX 
    this.position.y = valor.offsetY 
  }
  constructor() {}
  ngOnInit(): void {
    
  }
}
