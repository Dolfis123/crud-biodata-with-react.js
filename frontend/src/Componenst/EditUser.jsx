import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [nama, setNama] = useState("");
  const [nis, setNis] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(()=>{
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${id}`, {
        nama,
        nis,
        jurusan,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNama(response.data.nama);
    setNis(response.data.nis);
    setJurusan(response.data.jurusan);
    setEmail(response.data.email);
    setGender(response.data.gender);

  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
              />
            </div>
            <div className="field">
              <label className="label">NIS</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nis}
                  onChange={(e) => setNis(e.target.value)}
                  placeholder="NIS"
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Jurusan</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={jurusan}
                  onChange={(e) => setJurusan(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Teknik Komputer & Jaringan">
                    Teknik Komputer & Jaringan
                  </option>
                  <option value="Otomotif">Otomotif</option>
                  <option value="Listrik">Listrik</option>
                  <option value="Bagunan">Bangunan</option>
                  <option value="Mesin Bubut">Mesin Bubut</option>
                  <option value="Perikanan">Perikanan</option>
                  <option value="Perhotelan">Perhotelan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
