// Styled-Components
import { Container } from './styles';

// Components
import { Intro } from '../components/intro';
import { CategoryModal } from '../components/categoryModal';
import { ChefsModal } from '../components/chefsModal';
import { ChefsInfoModal } from '../components/chefsInfoModal';
import { Order } from '../components/order';

// Hooks
import { useState, useEffect } from 'react';

// Types
import { Category } from '../types/category';
import { Chefs } from '../types/chefs';
import { ChefsDetails } from '../types/chefsDatils';
import { ChefsInfo } from '../types/chefsInfo';

// Utils
import { api } from '../utils/api';

export function Main() {

  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [chefsModalVisible, setChefsModalVisible] = useState(false);
  const [chefsInfoModalVisible, setChefsInfoModalVisible] = useState(false);

  const [category, setCategory] = useState<Category[]>([]);
  const [chefs, setChefs] = useState<Chefs[]>([]);
  const [chefsDetails, setChefsDetails] = useState<null | ChefsDetails>(null);
  const [chefsInfo, setChefsInfo] = useState<ChefsInfo[]>([]);

  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [selectedChef, setSelectedChef] = useState<null | ChefsDetails>(null);

  useEffect(() => {
    Promise.all([
      api.get('/categories'),
    ]).then(([categoriesResponse]) => {
      setCategory(categoriesResponse.data);
    });
  }, []);

  function handleCategoryModal() {
    setCategoryModalVisible(true);
  }

  async function handleChefsModal(categoryId: string) {
    const route = `/categories/${categoryId}/chefs`;

    const categories = await api.get(route);

    setChefs(categories.data);
    setChefsModalVisible(true);
  }

  async function handleChefsInfoModal(chefsId: string) {
    Promise.all([
      await api.get(`/chefs/${chefsId}`),
      await api.get(`/chefs/${chefsId}/products`),
    ]).then(([chefsDetails, chefsInfo]) => {
      setChefsDetails(chefsDetails.data);
      setChefsInfo(chefsInfo.data);
      setChefsInfoModalVisible(true);
    });
  }

  async function handleOrderModalVisible(chefsId: string) {
    const route = `/chefs/${chefsId}`;

    const order = await api.get(route);

    setSelectedChef(order.data);
    setOrderModalVisible(true);
  }

  function handleResetOrder() {
    setSelectedChef(null);
  }

  return (
    <Container>
      <Intro
        onCategoryModalVisible={handleCategoryModal}
      />

      <CategoryModal
        visible={categoryModalVisible}
        onCategoryModalVisible={() => setCategoryModalVisible(false)}
        category={category}
        onChefsModalVisible={handleChefsModal}
      />

      <ChefsModal
        visible={chefsModalVisible}
        onChefsModalVisible={() => setChefsModalVisible(false)}
        chefs={chefs}
        onChefsInfoModalVisible={handleChefsInfoModal}
      />

      <ChefsInfoModal
        visible={chefsInfoModalVisible}
        onChefsInfoModalVisible={() => setChefsInfoModalVisible(false)}
        chefsDetails={chefsDetails}
        chefsInfo={chefsInfo}
        onOrderModalInfo={handleOrderModalVisible}
      />

      <Order
        visible={orderModalVisible}
        onOrderInfoVisible={() => setOrderModalVisible(false)}
        selectedChef={selectedChef}
        onResetOrder={handleResetOrder}
      />
    </Container>
  );
}
