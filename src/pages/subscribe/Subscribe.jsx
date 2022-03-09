
import Input from '../../components/input/Input';
import Modal from '../../components/modal/Modal';
import useForm from '../../hooks/useForm';
import React, { useState } from "react";
// import {  useDisclosure } from '@chakra-ui/react';
// import CreateModal from '../../components/modal';

import './subscribe.css';

import {
    VALIDATOR_NAME,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_MAXLENGTH, 
} from '../../utils/validators';

const Subscribe = (props) => {
    /* const { isOpen, onOpen, onClose } = useDisclosure(); */

    const [formState, inputHandler] = useForm(
        {
            nombre: {
                value: '',
                isValid: false,
            },
            email: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!formState.isValid) {
            return;
        }
        console.log(formState.inputs);
    };
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <>
            <div className="container">

                <form onSubmit={onSubmitHandler}>
                    <Input
                        type="text"
                        element="input"
                        id="nombre"
                        label="Name"
                        validators={[VALIDATOR_NAME(), VALIDATOR_MINLENGTH(4), VALIDATOR_MAXLENGTH(10)]}
                        errorText="Please enter between 4 and 10 characters"
                        onInput={inputHandler}
                    />
                    <Input
                        type="email"
                        element="input"
                        id="email"
                        label="Email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="You have entered an invalid email"
                        onInput={inputHandler}
                    />
                    <label className="form-control">Country</label>
                    <select className="form-control select">
                        <option hidden selected>Select...</option>
                        <option value="5581752">Afghanistan</option>
                        <option value="5581753">Albania</option>
                        <option value="5581754">Algeria</option>
                        <option value="5581755">American Samoa</option>
                        <option value="5581756">Andorra</option>
                        <option value="5581757">Angola</option>
                        <option value="5581997">Anguilla</option>
                        <option value="5581998">Antigua &amp; Barbuda</option>
                        <option value="5581999">Argentina</option>
                        <option value="5582000">Armenia</option>
                        <option value="5582001">Aruba</option>
                        <option value="5582002">Australia</option>
                        <option value="5581991">Austria</option>
                        <option value="5581992">Azerbaijan</option>
                        <option value="5581993">Azores</option>
                        <option value="5581994">Bahamas</option>
                        <option value="5581995">Bahrain</option>
                        <option value="5581996">Bangladesh</option>
                        <option value="5581985">Barbados</option>
                        <option value="5581986">Belarus</option>
                        <option value="5581987">Belgium</option>
                        <option value="5581988">Belize</option>
                        <option value="5581989">Benin</option>
                        <option value="5581990">Bermuda</option>
                        <option value="5581979">Bhutan</option>
                        <option value="5581980">Bolivia</option>
                        <option value="5581981">Bonaire</option>
                        <option value="5581982">Bosnia &amp; Herzegovina</option>
                        <option value="5581983">Botswana</option>
                        <option value="5581984">Brazil</option>
                        <option value="5581973">British Indian Ocean Ter</option>
                        <option value="5581974">Brunei</option>
                        <option value="5581975">Bulgaria</option>
                        <option value="5581976">Burkina Faso</option>
                        <option value="5581977">Burundi</option>
                        <option value="5581978">Cambodia</option>
                        <option value="5581967">Cameroon</option>
                        <option value="5581968">Canada</option>
                        <option value="5581969">Canary Islands</option>
                        <option value="5581970">Cape Verde</option>
                        <option value="5581971">Cayman Islands</option>
                        <option value="5581972">Central African Republic</option>
                        <option value="5581961">Chad</option>
                        <option value="5581962">Channel Islands</option>
                        <option value="5581963">Chile</option>
                        <option value="5581964">China</option>
                        <option value="5581965">Christmas Island</option>
                        <option value="5581966">Cocos Island</option>
                        <option value="5581955">Colombia</option>
                        <option value="5581956">Comoros</option>
                        <option value="5581957">Congo</option>
                        <option value="5581958">Congo Democratic Rep</option>
                        <option value="5581959">Cook Islands</option>
                        <option value="5581960">Costa Rica</option>
                        <option value="5581949">Cote D'Ivoire</option>
                        <option value="5581950">Croatia</option>
                        <option value="5581951">Cuba</option>
                        <option value="5581952">Curacao</option>
                        <option value="5581953">Cyprus</option>
                        <option value="5581954">Czech Republic</option>
                        <option value="5581943">Denmark</option>
                        <option value="5581944">Djibouti</option>
                        <option value="5581945">Dominica</option>
                        <option value="5581946">Dominican Republic</option>
                        <option value="5581947">East Timor</option>
                        <option value="5581948">Ecuador</option>
                        <option value="5581937">Egypt</option>
                        <option value="5581938">El Salvador</option>
                        <option value="5581939">Equatorial Guinea</option>
                        <option value="5581940">Eritrea</option>
                        <option value="5581941">Estonia</option>
                        <option value="5581942">Ethiopia</option>
                        <option value="5581931">Falkland Islands</option>
                        <option value="5581932">Faroe Islands</option>
                        <option value="5581933">Fiji</option>
                        <option value="5581934">Finland</option>
                        <option value="5581935">France</option>
                        <option value="5581936">French Guiana</option>
                        <option value="5581925">French Polynesia</option>
                        <option value="5581926">French Southern Ter</option>
                        <option value="5581927">Gabon</option>
                        <option value="5581928">Gambia</option>
                        <option value="5581929">Georgia</option>
                        <option value="5581930">Germany</option>
                        <option value="5581919">Ghana</option>
                        <option value="5581920">Gibraltar</option>
                        <option value="5581921">Great Britain</option>
                        <option value="5581922">Greece</option>
                        <option value="5581923">Greenland</option>
                        <option value="5581924">Grenada</option>
                        <option value="5581913">Guadeloupe</option>
                        <option value="5581914">Guam</option>
                        <option value="5581915">Guatemala</option>
                        <option value="5581916">Guernsey</option>
                        <option value="5581917">Guinea</option>
                        <option value="5581918">Guinea-Bissau</option>
                        <option value="5581907">Guyana</option>
                        <option value="5581908">Haiti</option>
                        <option value="5581909">Honduras</option>
                        <option value="5581910">Hong Kong</option>
                        <option value="5581911">Hungary</option>
                        <option value="5581912">Iceland</option>
                        <option value="5581901">India</option>
                        <option value="5581902">Indonesia</option>
                        <option value="5581903">Iran</option>
                        <option value="5581904">Iraq</option>
                        <option value="5581905">Ireland</option>
                        <option value="5581906">Isle of Man</option>
                        <option value="5581895">Israel</option>
                        <option value="5581896">Italy</option>
                        <option value="5581897">Jamaica</option>
                        <option value="5581898">Japan</option>
                        <option value="5581899">Jersey</option>
                        <option value="5581900">Jordan</option>
                        <option value="5581889">Kazakhstan</option>
                        <option value="5581890">Kenya</option>
                        <option value="5581891">Kiribati</option>
                        <option value="5581892">Korea North</option>
                        <option value="5581893">Korea South</option>
                        <option value="5581894">Kuwait</option>
                        <option value="5581883">Kyrgyzstan</option>
                        <option value="5581884">Laos</option>
                        <option value="5581885">Latvia</option>
                        <option value="5581886">Lebanon</option>
                        <option value="5581887">Lesotho</option>
                        <option value="5581888">Liberia</option>
                        <option value="5581877">Libya</option>
                        <option value="5581878">Liechtenstein</option>
                        <option value="5581879">Lithuania</option>
                        <option value="5581880">Luxembourg</option>
                        <option value="5581881">Macau</option>
                        <option value="5581882">Macedonia</option>
                        <option value="5581871">Madagascar</option>
                        <option value="5581872">Malawi</option>
                        <option value="5581873">Malaysia</option>
                        <option value="5581874">Maldives</option>
                        <option value="5581875">Mali</option>
                        <option value="5581876">Malta</option>
                        <option value="5581865">Marshall Islands</option>
                        <option value="5581866">Martinique</option>
                        <option value="5581867">Mauritania</option>
                        <option value="5581868">Mauritius</option>
                        <option value="5581869">Mayotte</option>
                        <option value="5581870">Mexico</option>
                        <option value="5581859">Midway Islands</option>
                        <option value="5581860">Moldova</option>
                        <option value="5581861">Monaco</option>
                        <option value="5581862">Mongolia</option>
                        <option value="5581863">Montenegro</option>
                        <option value="5581864">Montserrat</option>
                        <option value="5581853">Morocco</option>
                        <option value="5581854">Mozambique</option>
                        <option value="5581855">Myanmar</option>
                        <option value="5581856">Namibia</option>
                        <option value="5581857">Nauru</option>
                        <option value="5581858">Nepal</option>
                        <option value="5581847">Netherland Antilles</option>
                        <option value="5581848">Netherlands</option>
                        <option value="5581849">Nevis</option>
                        <option value="5581850">New Caledonia</option>
                        <option value="5581851">New Zealand</option>
                        <option value="5581852">Nicaragua</option>
                        <option value="5581841">Niger</option>
                        <option value="5581842">Nigeria</option>
                        <option value="5581843">Niue</option>
                        <option value="5581844">Norfolk Island</option>
                        <option value="5581845">Norway</option>
                        <option value="5581846">Oman</option>
                        <option value="5581835">Pakistan</option>
                        <option value="5581836">Palau Island</option>
                        <option value="5581837">Palestine</option>
                        <option value="5581838">Panama</option>
                        <option value="5581839">Papua New Guinea</option>
                        <option value="5581840">Paraguay</option>
                        <option value="5581829">Peru</option>
                        <option value="5581830">Philippines</option>
                        <option value="5581831">Pitcairn Island</option>
                        <option value="5581832">Poland</option>
                        <option value="5581833">Portugal</option>
                        <option value="5581834">Puerto Rico</option>
                        <option value="5581823">Qatar</option>
                        <option value="5581824">Reunion</option>
                        <option value="5581825">Romania</option>
                        <option value="5581826">Russia</option>
                        <option value="5581827">Rwanda</option>
                        <option value="5581828">Saipan</option>
                        <option value="5581817">Samoa</option>
                        <option value="5581818">Samoa American</option>
                        <option value="5581819">San Marino</option>
                        <option value="5581820">Sao Tome &amp; Principe</option>
                        <option value="5581821">Saudi Arabia</option>
                        <option value="5581822">Senegal</option>
                        <option value="5581811">Serbia</option>
                        <option value="5581812">Serbia &amp; Montenegro</option>
                        <option value="5581813">Seychelles</option>
                        <option value="5581814">Sierra Leone</option>
                        <option value="5581815">Singapore</option>
                        <option value="5581816">Slovakia</option>
                        <option value="5581805">Slovenia</option>
                        <option value="5581806">Solomon Islands</option>
                        <option value="5581807">Somalia</option>
                        <option value="5581808">South Africa</option>
                        <option value="5581809">South Sudan</option>
                        <option value="5581810">Spain</option>
                        <option value="5581799">Sri Lanka</option>
                        <option value="5581800">St Barthelemy</option>
                        <option value="5581801">St Eustatius</option>
                        <option value="5581802">St Helena</option>
                        <option value="5581803">St Kitts-Nevis</option>
                        <option value="5581804">St Lucia</option>
                        <option value="5581793">St Maarten</option>
                        <option value="5581794">St Pierre &amp; Miquelon</option>
                        <option value="5581795">St Vincent &amp; Grenadines</option>
                        <option value="5581796">Sudan</option>
                        <option value="5581797">Suriname</option>
                        <option value="5581798">Swaziland</option>
                        <option value="5581787">Sweden</option>
                        <option value="5581788">Switzerland</option>
                        <option value="5581789">Syria</option>
                        <option value="5581790">Tahiti</option>
                        <option value="5581791">Taiwan</option>
                        <option value="5581792">Tajikistan</option>
                        <option value="5581781">Tanzania</option>
                        <option value="5581782">Thailand</option>
                        <option value="5581783">Togo</option>
                        <option value="5581784">Tokelau</option>
                        <option value="5581785">Tonga</option>
                        <option value="5581786">Trinidad &amp; Tobago</option>
                        <option value="5581775">Tunisia</option>
                        <option value="5581776">Turkey</option>
                        <option value="5581777">Turkmenistan</option>
                        <option value="5581778">Turks &amp; Caicos Is</option>
                        <option value="5581779">Tuvalu</option>
                        <option value="5581780">Uganda</option>
                        <option value="5581769">Ukraine</option>
                        <option value="5581770">United Arab Emirates</option>
                        <option value="5581771">United Kingdom</option>
                        <option value="5581772">United States of America</option>
                        <option value="5581773">Uruguay</option>
                        <option value="5581774">Uzbekistan</option>
                        <option value="5581763">Vanuatu</option>
                        <option value="5581764">Vatican City State</option>
                        <option value="5581765">Venezuela</option>
                        <option value="5581766">Vietnam</option>
                        <option value="5581767">Virgin Islands (Brit)</option>
                        <option value="5581768">Virgin Islands (USA)</option>
                        <option value="5581758">Wake Island</option>
                        <option value="5581759">Wallis &amp; Futana Is</option>
                        <option value="5581760">Yemen</option>
                        <option value="5581761">Zambia</option>
                        <option value="5581762">Zimbabwe</option>
                    </select>

                    <button type="submit" disabled={!formState.isValid} className="subscribe" onClick={toggleModal} >
                        Subscribe
                    </button>

                    {/* <CreateModal isOpen={isOpen} onClose={onClose} /> 

                    <button type="submit" disabled={!formState.isValid} onClick={onOpen}>
                        Subscribe
                    </button> */}

                    {modal && <Modal />}
                </form>
            </div>
        </>
    );
};

export default Subscribe;

