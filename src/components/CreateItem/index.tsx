import { useState } from 'react';
import { FaChild, FaImage, FaPlus } from 'react-icons/fa';
import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import styles from './styles.module.scss';

export function CreateItem() {
    const [active, setActive] = useState(1);
    const [check, setCheck] = useState(1);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    return (
        <>
            <button className={styles.button} onClick={handleShow}>
                <FaPlus />
                Adicionar item
            </button>
            {show &&
                <div className={styles.create_item}>
                    <div className={styles.overflow} onMouseDown={handleShow}></div>
                    <div className={styles.content}>
                        <span className={styles.title}>Novo Item</span>
                        <div className={styles.tabs}>
                            <button className={active === 1 && styles.active} onClick={() => setActive(1)}>
                                Detalhes
                            </button>
                            <button className={active === 2 && styles.active} onClick={() => setActive(2)}>
                                Complementos
                            </button>
                            <button className={active === 3 && styles.active} onClick={() => setActive(3)}>
                                Classificação
                            </button>
                            <button className={active === 4 && styles.active} onClick={() => setActive(4)}>
                                Disponibilidade
                            </button>
                        </div>
                        <div className="d-flex mt-4">
                            <div className='d-flex flex-column gap-4 w-100' style={{ maxWidth: 400 }}>
                                <Select
                                    label={'Categoria'}
                                    placeholder={'Selecione uma categoria'}
                                />
                                <Input
                                    label={'Nome do prato'}
                                    placeholder={'Digite o nome do prato'}
                                />
                                <Textarea
                                    label={'Descrição'}
                                    placeholder={'Digite a descrição do prato'}
                                />
                            </div>
                            <div className={styles.upload_image}>
                                <span className={styles.title}>Imagem do item</span>
                                <p>Aparece na listagem e no detalhe do prato</p>
                                <div className={styles.area}>
                                    <FaImage />
                                    <button>Escolher imagem</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <span className={styles.title_secondary}>Pra qual tamanho de fome é esse item </span>
                            <p className={styles.subtitle}>Dê mais detalhes para que o cliente possa planejar a refeição</p>
                            <div className="d-flex gap-4 mb-4">
                                <div className={`${styles.card_checkbox} ${check === 1 && styles.active}`} onMouseDown={() => setCheck(1)}>
                                    <span className={styles.check}></span>
                                    <span className={styles.title_check}>Não se aplica</span>
                                </div>
                                <div className={`${styles.card_checkbox} ${check === 2 && styles.active}`} onMouseDown={() => setCheck(2)}>
                                    <span className={styles.check}></span>
                                    <div className="d-flex">
                                    <FaChild />
                                    </div>
                                    <span className={styles.title_check}>1 pessoa</span>
                                </div>
                                <div className={`${styles.card_checkbox} ${check === 3 && styles.active}`} onMouseDown={() => setCheck(3)}>
                                    <span className={styles.check}></span>
                                    <div className="d-flex">
                                    <FaChild />
                                    <FaChild />
                                    </div>
                                    <span className={styles.title_check}>2 pessoas</span>
                                </div>
                                <div className={`${styles.card_checkbox} ${check === 4 && styles.active}`} onMouseDown={() => setCheck(4)}>
                                    <span className={styles.check}></span>
                                    <div className="d-flex">
                                    <FaChild />
                                    <FaChild />
                                    <FaChild />
                                    </div>
                                    <span className={styles.title_check}>3 pessoas</span>
                                </div>
                                <div className={`${styles.card_checkbox} ${check === 5 && styles.active}`} onMouseDown={() => setCheck(5)}>
                                    <span className={styles.check}></span>
                                    <div className="d-flex">
                                    <FaChild />
                                    <FaChild />
                                    <FaChild />
                                    <FaChild />
                                    </div>
                                    <span className={styles.title_check}>4 pessoas</span>
                                </div>
                            </div>
                            <div className={styles.input_unit + ' mb-4'}>
                                <label htmlFor="">Peso</label>
                                <div className="d-flex">
                                    <input type="text" />
                                    <button>Gr</button>
                                </div>
                            </div>
                            <div className={styles.input_unit}>
                                <label htmlFor="">Preço</label>
                                <div className="d-flex">
                                    <input type="text" />
                                    <button>R$</button>
                                    <button className={styles.btn_desconto}>Aplicar desconto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}